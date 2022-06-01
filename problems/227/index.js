import { calculateTokens } from "../224/index.js";
export const HighPriorityOperatorSet = new Set(["*", "/"]);
export const LowPriorityOperatorSet = new Set(["+", "-"]);
export const OperatorMap = new Map([
  ["+", (m, n) => m + n],
  ["-", (m, n) => m - n],
  ["*", (m, n) => m * n],
  ["/", (m, n) => Math.floor(m / n)],
]);
/**
 * @param {string} s
 * @param {Set<string, (m: number, n: number) => number>} highPriorityOperatorSet
 * @param {Set<string, (m: number, n: number) => number>} lowPriorityOperatorSet
 * @return {string[]}
 */
export const generateTokens = (
  s,
  highPriorityOperatorSet,
  lowPriorityOperatorSet
) => {
  const noSpaceS = s.replace(/ /g, "");
  const stack = [[]];
  let token = "";
  for (let i = 0; i < noSpaceS.length; i++) {
    const char = noSpaceS[i];
    if (char === "(") {
      if (token) {
        stack[stack.length - 1].push(token);
      }
      const tmp = [];
      stack[stack.length - 1].push(tmp);
      stack.push(tmp);
      token = "";
    } else if (char === ")") {
      if (token) {
        stack[stack.length - 1].push(token);
      }
      stack.pop();
      token = "";
    } else if (highPriorityOperatorSet.has(char)) {
      if (
        stack[stack.length - 1].length === 0 ||
        lowPriorityOperatorSet.has(
          stack[stack.length - 1][stack[stack.length - 1].length - 1]
        )
      ) {
        const tmp = [];
        stack[stack.length - 1].push(tmp);
        stack.push(tmp);
      }
      if (token) {
        stack[stack.length - 1].push(token);
      }
      stack[stack.length - 1].push(char);
      token = "";
    } else if (lowPriorityOperatorSet.has(char)) {
      let tmp = stack[stack.length - 1];
      if (
        highPriorityOperatorSet.has(
          stack[stack.length - 1][stack[stack.length - 1].length - 1]
        )
      ) {
        tmp = stack.pop();
      }
      if (token) {
        tmp.push(token);
      }
      stack[stack.length - 1].push(char);
      token = "";
    } else {
      token += char;
    }
  }
  if (token) {
    stack[stack.length - 1].push(token);
  }
  return stack[0];
};
/**
 * @param {string} s
 * @return {number}
 */
export const calculate = (s) => {
  const tokens = generateTokens(
    s,
    HighPriorityOperatorSet,
    LowPriorityOperatorSet
  );
  return calculateTokens(tokens, OperatorMap);
};
