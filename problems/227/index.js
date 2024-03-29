import { Stack } from '../../libs/common/index.js';
import { calculateTokens } from '../224/index.js';
export const HighPriorityOperatorSet = new Set(['*', '/']);
export const LowPriorityOperatorSet = new Set(['+', '-']);
export const OperatorMap = new Map([
  ['+', (m, n) => m + n],
  ['-', (m, n) => m - n],
  ['*', (m, n) => m * n],
  ['/', (m, n) => Math.floor(m / n)],
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
  const chars = s.replace(/ /g, '');
  const stack = new Stack(new Stack());
  let preValue = '';
  let preOperator = '+';
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
    if (highPriorityOperatorSet.has(char)) {
      if (lowPriorityOperatorSet.has(preOperator)) {
        pushStack(new Stack());
      }
      pushStackLast(preValue);
      pushStackLast(char);
      preValue = '';
      preOperator = char;
    } else if (lowPriorityOperatorSet.has(char)) {
      pushStackLast(preValue);
      if (highPriorityOperatorSet.has(preOperator)) {
        stack.pop();
      }
      pushStackLast(char);
      preValue = '';
      preOperator = char;
    } else {
      preValue += char;
    }
  }
  pushStackLast(preValue);
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
