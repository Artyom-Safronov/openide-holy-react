import stylelint from 'stylelint';

const { report, ruleMessages, validateOptions } = stylelint.utils;

const ruleName = 'plugin/no-raw-colors';

const messages = ruleMessages(ruleName, {
  rejected: (value) =>
    `Raw color "${value}" is not allowed. Use a SCSS variable ($var) instead.`,
});

const meta = { url: '', fixable: false };

// #fff, #ffffff, #ffffffcc
const HEX_RE = /#[0-9a-fA-F]{3,8}\b/g;

// rgb(255...), rgba(255,...), hsl(230,...) — only when first arg is a raw number, not $var or var(
const COLOR_FN_RE = /\b(rgba?|hsla?|oklch|lch|lab|oklab)\s*\(\s*[\d.]+/g;

function extractColorFunction(str, startIndex) {
  let depth = 0;
  for (let i = startIndex; i < str.length; i++) {
    if (str[i] === '(') depth++;
    else if (str[i] === ')' && --depth === 0) return str.slice(startIndex, i + 1);
  }
  return str.slice(startIndex);
}

function valueOffset(decl) {
  return decl.prop.length + (decl.raws.between ?? ': ').length;
}

const ruleFunction = (primaryOption) => {
  return (root, result) => {
    const validOptions = validateOptions(result, ruleName, {
      actual: primaryOption,
    });
    if (!validOptions) return;

    root.walkDecls((decl) => {
      const value = decl.value;
      const offset = valueOffset(decl);

      for (const match of value.matchAll(HEX_RE)) {
        const index = offset + match.index;
        report({
          message: messages.rejected(match[0]),
          node: decl,
          result,
          ruleName,
          index,
          endIndex: index + match[0].length,
        });
      }

      for (const match of value.matchAll(COLOR_FN_RE)) {
        const word = extractColorFunction(value, match.index);
        const index = offset + match.index;
        report({
          message: messages.rejected(word),
          node: decl,
          result,
          ruleName,
          index,
          endIndex: index + word.length,
        });
      }
    });
  };
};

ruleFunction.ruleName = ruleName;
ruleFunction.messages = messages;
ruleFunction.meta = meta;

export default [{ ruleName, rule: ruleFunction }];
