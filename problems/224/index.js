import { Stack } from '../../libs/common/index.js';
export const OperatorSet = new Set(['+', '-']);
export const OperatorMap = new Map([
  ['+', (m, n) => m + n],
  ['-', (m, n) => m - n],
]);
/**
 * @param {string} s
 * @param {Set<string>} operatorSet
 * @return {string[]}
 */
export const generateTokens = (s, operatorSet) => {
  const chars = s.replace(/ /g, '');
  const stack = new Stack(new Stack());
  let preValue = '';
  const pushStack = (tmp) => {
    if (tmp) {
      stack.last().push(tmp);
      stack.push(tmp);
    }
  };
  const pushStackLast = (tmp) => {
    if (tmp) {
      stack.last().push(tmp);
    }
  };
  for (let i = 0; i < chars.length; i++) {
    const char = chars[i];
    if (char === '(') {
      pushStackLast(preValue);
      pushStack(new Stack());
      preValue = '';
    } else if (char === ')') {
      pushStackLast(preValue);
      stack.pop();
      preValue = '';
    } else if (operatorSet.has(char)) {
      pushStackLast(preValue);
      pushStackLast(char);
      preValue = '';
    } else {
      preValue += char;
    }
  }
  pushStackLast(preValue);
  return stack.first();
};
/**
 * @param {string[]} tokens
 * @param {Map<string, (m: number, n: number) => number>} operatorMap
 * @return {number}
 */
export const calculateTokens = (tokens, operatorMap) => {
  let result = 0;
  let operator = operatorMap.get('+');
  for (let i = 0; i < tokens.length; i++) {
    const token = tokens[i];
    if (Array.isArray(token)) {
      const childResult = calculateTokens(token, operatorMap);
      result = operator(result, childResult);
    } else if (operatorMap.has(token)) {
      operator = operatorMap.get(token);
    } else {
      result = operator(result, Number(token));
    }
  }
  return result;
};
/**
 * @param {string} s
 * @return {number}
 */
export const calculate = (s) => {
  const tokens = generateTokens(s, OperatorSet);
  return calculateTokens(tokens, OperatorMap);
};
