import { last } from "../../libs/common/index.js";
export const OperatorSet = new Set(["+", "-"]);
export const OperatorMap = new Map([
  ["+", (m, n) => m + n],
  ["-", (m, n) => m - n],
]);
/**
 * @param {string} s
 * @param {Set<string>} operatorSet
 * @return {string[]}
 */
export const generateTokens = (s, operatorSet) => {
  const noSpaceS = s.replace(/ /g, "");
  const stack = [[]];
  let token = "";
  for (let i = 0; i < noSpaceS.length; i++) {
    const char = noSpaceS[i];
    if (char === "(") {
      if (token) {
        last(stack).push(token);
      }
      const tmp = [];
      last(stack).push(tmp);
      stack.push(tmp);
      token = "";
    } else if (char === ")") {
      if (token) {
        last(stack).push(token);
      }
      stack.pop();
      token = "";
    } else if (operatorSet.has(char)) {
      if (token) {
        last(stack).push(token);
      }
      last(stack).push(char);
      token = "";
    } else {
      token += char;
    }
  }
  if (token) {
    last(stack).push(token);
  }
  return stack[0];
};
/**
 * @param {string[]} tokens
 * @param {Map<string, (m: number, n: number) => number>} operatorMap
 * @return {number}
 */
export const calculateTokens = (tokens, operatorMap) => {
  let result = 0;
  let operator = operatorMap.get("+");
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
