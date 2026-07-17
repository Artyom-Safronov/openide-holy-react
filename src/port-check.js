#!/usr/bin/env node
'use strict';

import readline from 'node:readline';
import { execSync } from 'node:child_process';

const isWindows = process.platform === 'win32';

const COMMON_CLIENT_PORTS = new Array(10).fill(0).map((v, i) => 3000 + i);

/** Reads the port from `process.argv` (`node port-check.js 3000`), or null. */
function parsePortArg(argv) {
  const raw = argv[2];
  if (raw === undefined) {
    return null;
  }
  return raw.trim();
}

/**
 * Validates a raw port string and returns it as a number.
 * Throws an Error with a human message when it is not a valid TCP port.
 */
function validatePort(raw) {
  const trimmed = String(raw).trim();
  if (!/^\d+$/.test(trimmed)) {
    throw new Error(`"${raw}" is not a number`);
  }
  const port = Number(trimmed);
  if (port < 1 || port > 65535) {
    throw new Error(`port ${port} is out of range (must be 1-65535)`);
  }
  return port;
}

/** Prompts a single line and resolves with the user's answer. */
function askQuestion(rl, query) {
  return new Promise((resolve) => {
    rl.question(query, (answer) => resolve(answer));
  });
}

/**
 * Returns a validated port: from the CLI argument if present, otherwise by
 * asking the user until they enter a valid one (a loop to demo Resume).
 */
async function resolvePort(rl) {
  const fromArg = parsePortArg(process.argv);
  if (fromArg !== null) {
    return validatePort(fromArg);
  }
  while (true) {
    const raw = await askQuestion(rl, 'Enter a port to check (1-65535): ');
    try {
      return validatePort(raw);
    } catch (err) {
      console.log(`  ✗ ${err.message}, try again.`);
    }
  }
}

/** Runs a shell command and returns trimmed stdout, or '' if it fails/empty. */
function runCommand(command) {
  try {
    const stdout = execSync(command, { encoding: 'utf8', stdio: ['ignore', 'pipe', 'ignore'] });
    return stdout.trim();
  } catch {
    // Non-zero exit (e.g. lsof finds nothing) is expected — treat as no output.
    return '';
  }
}

/** Parses whitespace/newline separated PIDs into a unique array of numbers. */
function parsePids(output) {
  const pids = output
    .split(/\s+/)
    .map((token) => Number(token))
    .filter((pid) => Number.isInteger(pid) && pid > 0);
  return Array.from(new Set(pids));
}

/** Returns the PIDs of processes LISTENING on the given TCP port. */
function findListeningPids(port) {
  const command = isWindows
    ? `powershell -NoProfile -Command "Get-NetTCPConnection -State Listen -LocalPort ${port} | Select-Object -ExpandProperty OwningProcess"`
    : `lsof -nP -iTCP:${port} -sTCP:LISTEN -t`;
  const output = runCommand(command);
  return parsePids(output);
}

/** Looks up a short, human description of a process by PID. */
function describeProcess(pid) {
  const command = isWindows
    ? `powershell -NoProfile -Command "(Get-Process -Id ${pid}).ProcessName"`
    : `ps -p ${pid} -o comm=`;
  const name = runCommand(command) || 'unknown';
  return `PID ${pid} (${name})`;
}

/** True if a process with the given PID currently exists. */
function isAlive(pid) {
  try {
    // Signal 0 doesn't kill — it only checks that the process exists.
    process.kill(pid, 0);
    return true;
  } catch {
    return false;
  }
}

/** Sleeps for the given milliseconds (used to wait after SIGTERM). */
function sleep(ms) {
  return new Promise((resolve) => setTimeout(resolve, ms));
}

/**
 * Tries to terminate one process: SIGTERM first, then SIGKILL if it survives.
 * Returns true if the process is gone afterwards.
 */
async function killProcess(pid) {
  try {
    process.kill(pid, 'SIGTERM');
  } catch (err) {
    console.log(`  ✗ could not signal PID ${pid}: ${err.message}`);
    return false;
  }

  await sleep(300);

  if (isAlive(pid)) {
    // Still there — escalate.
    try {
      process.kill(pid, 'SIGKILL');
    } catch {
      // Ignore: it may have exited between the check and the kill.
    }
    await sleep(200);
  }

  return !isAlive(pid);
}

/** Kills every PID in turn and prints the outcome for each. */
async function killAll(pids) {
  let killed = 0;
  for (const pid of pids) {
    const ok = await killProcess(pid);
    if (ok) {
      killed += 1;
      console.log(`  ✓ killed ${describeProcess(pid).replace(/\s\(.*\)$/, '')}`);
    } else {
      console.log(`  ✗ failed to kill PID ${pid}`);
    }
  }
  return killed;
}

/** Asks a yes/no question; defaults to "no" on empty input. */
async function confirmKill(rl, count) {
  const noun = count === 1 ? 'process' : 'processes';
  const answer = await askQuestion(rl, `Kill ${count} ${noun}? [y/N] `);
  return /^y(es)?$/i.test(answer.trim());
}

/** Orchestrates the whole flow. Set your first breakpoint here. */
async function main() {
  const rl = readline.createInterface({ input: process.stdin, output: process.stdout });

  try {
    const port = await resolvePort(rl);
    console.log(`Checking port ${port}...`);

    const pids = findListeningPids(port);
    if (pids.length === 0) {
      console.log(`✓ Port ${port} is free — nothing is listening on it.`);
      return;
    }

    console.log(`✗ Port ${port} is in use by ${pids.length} process(es):`);
    for (const pid of pids) {
      console.log(`   • ${describeProcess(pid)}`);
    }

    const shouldKill = COMMON_CLIENT_PORTS.includes(port) || (await confirmKill(rl, pids.length));
    if (!shouldKill) {
      console.log('Left the process(es) running.');
      return;
    }

    const killed = await killAll(pids);
    console.log(`Done: ${killed}/${pids.length} process(es) killed.`);
  } finally {
    rl.close();
  }
}

// Entry point: run main() and turn any uncaught error into a clean exit code.
main().catch((err) => {
  console.error(`Error: ${err.message}`);
  process.exitCode = 1;
});
