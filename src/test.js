import readline, { createInterface } from 'node:readline';

const R = '\x1b[0m';
console.log('\x1b[31mred\x1b[0m \x1b[32mgreen\x1b[0m \x1b[34mblue\x1b[0m \x1b[33myellow' + R);
console.log(
  '\x1b[1mbold\x1b[0m \x1b[4munderline\x1b[0m \x1b[7minverse\x1b[0m \x1b[90mdim-grey' + R
);
console.log('\x1b[41m\x1b[97m white-on-red background ' + R);

// --- stdin check: type your name and press Enter; the prompt needs working stdin. ---
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});
rl.question('\x1b[36mWhat is your name?\x1b[0m ', (name) => {
  const greeting = `Hi ${name}!`; // <-- put a breakpoint on this line
  console.log(`\x1b[1m\x1b[32m${greeting}${R}`);
  try {
    throw new Error('Test'); // теперь caught → сработает all, но НЕ uncaught
  } catch (e) {}
  rl.close();
});
