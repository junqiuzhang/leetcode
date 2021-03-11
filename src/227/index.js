const SpaceReg = /\s/g;
const NumberReg = /\d/g;
const OperateReg = /\+|\-|\*|\//g;
const BracketReg = /\(|\)/g;
/**
 * @param {string} s
 * @return {number}
 */
function calculate(s) {
  let tokens = tokenize(s);
  let i = 1;
  while (i < tokens.length) {
    if (tokens[i] === "*" || tokens[i] === "/") {
      tokens[i + 1] = calc(tokens[i - 1], tokens[i + 1], tokens[i]);
      tokens[i] = undefined;
      tokens[i - 1] = undefined;
    }
    i += 2;
  }
  tokens = tokens.filter((t) => t !== undefined);
  let pre = tokens[0];
  let j = 1;
  while (j < tokens.length) {
    pre = calc(pre, tokens[j + 1], tokens[j]);
    j += 2;
  }
  return pre;
}
/**
 * @param {string} s
 * @return {string[]} tokens
 */
function tokenize(s) {
  const formattedS = s.replace(BracketReg, "").replace(SpaceReg, "");
  const numbers = formattedS.split(OperateReg).filter((n) => n);
  const operates = formattedS.split(NumberReg).filter((o) => o);
  const tokens = [];
  for (let i = 0; i < numbers.length; i++) {
    tokens.push(numbers[i]);
    tokens.push(operates[i]);
  }
  return tokens.filter((t) => t);
}
/**
 *
 * @param {number | string} m
 * @param {number | string} n
 * @param {'+' | '-' | '*' | '/'} o
 * @return {number}
 */
function calc(m, n, o) {
  const intM = parseInt(m);
  const intN = parseInt(n);
  switch (o) {
    case "+":
      return intM + intN;
    case "-":
      return intM - intN;
    case "*":
      return Math.floor(intM * intN);
    case "/":
      return Math.floor(intM / intN);
    default:
      return 0;
  }
}
