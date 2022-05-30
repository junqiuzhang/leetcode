const SpaceReg = /\s/g;
const NumberReg = /\d/g;
const OperateReg = /\+|\-|\*\//g;
const BracketReg = /\(|\)/g;
const GroupReg = /(\([\d\+\-\s]*\))/g;
/**
 * @param {string} s
 * @return {number}
 */
const calculate = (s) => {
  let formattedS = s.replace(SpaceReg, '');
  let matchObj = formattedS.match(GroupReg);
  while (matchObj) {
    matchObj = formattedS.match(GroupReg);
    if (matchObj) {
      const num = groupCalculate(matchObj[0]);
      const index = formattedS.indexOf(matchObj[0]);
      if (num < 0) {
        if (index === 0) {
          formattedS = formattedS.replace(matchObj[0], num);
        }
        if (formattedS[index - 1] === '+') {
          formattedS = formattedS.replace('+' + matchObj[0], num);
        }
        if (formattedS[index - 1] === '-') {
          formattedS = formattedS.replace('-' + matchObj[0], '+' + -num);
        }
      } else {
        formattedS = formattedS.replace(matchObj[0], num);
      }
    }
  }
  return groupCalculate(formattedS);
}
/**
 * @param {string} s
 * @return {number}
 */
const groupCalculate = (s) => {
  let tokens = tokenize(s);
  let i = 1;
  while (i < tokens.length) {
    if (tokens[i] === '*' || tokens[i] === '/') {
      tokens[i + 1] = calc(tokens[i - 1], tokens[i + 1], tokens[i]);
      tokens[i] = undefined;
      tokens[i - 1] = undefined;
    }
    i += 2;
  }
  tokens = tokens.filter((t) => t !== undefined);
  let pre = 0;
  let j = 0;
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
const tokenize = (s) => {
  const formattedS = s.replace(BracketReg, '');
  let numbers = formattedS.split(OperateReg).filter((n) => n.trim());
  let operates = formattedS.split(NumberReg).filter((o) => o.trim());
  const tokens = [];
  if (numbers.length - operates.length === 1) {
    operates = ['+', ...operates];
  }
  for (let i = 0; i < numbers.length; i++) {
    tokens.push(operates[i]);
    tokens.push(numbers[i]);
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
const calc = (m, n, o) => {
  const intM = parseInt(m);
  const intN = parseInt(n);
  switch (o) {
    case '+':
      return intM + intN;
    case '-':
      return intM - intN;
    case '*':
      return Math.floor(intM * intN);
    case '/':
      return Math.floor(intM / intN);
    default:
      return 0;
  }
}
