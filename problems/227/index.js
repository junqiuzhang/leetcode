import { Stack } from "../../libs/common/index.js";
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
  const stack = new Stack(new Stack());
  let token = "";
  for (let i = 0; i < noSpaceS.length; i++) {
    const char = noSpaceS[i];
    if (char === "(") {
      if (token) {
        stack.last().push(token);
      }
      const tmp = new Stack();
      stack.last().push(tmp);
      stack.push(tmp);
      token = "";
    } else if (char === ")") {
      if (token) {
        stack.last().push(token);
      }
      stack.pop();
      token = "";
    } else if (highPriorityOperatorSet.has(char)) {
      if (
        stack.last().length === 0 ||
        lowPriorityOperatorSet.has(stack.last().last())
      ) {
        const tmp = new Stack();
        stack.last().push(tmp);
        stack.push(tmp);
      }
      if (token) {
        stack.last().push(token);
      }
      stack.last().push(char);
      token = "";
    } else if (lowPriorityOperatorSet.has(char)) {
      let tmp = stack.last();
      if (highPriorityOperatorSet.has(stack.last().last())) {
        tmp = stack.pop();
      }
      if (token) {
        tmp.push(token);
      }
      stack.last().push(char);
      token = "";
    } else {
      token += char;
    }
  }
  if (token) {
    stack.last().push(token);
  }
  return stack.first();
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
