import { performance } from 'perf_hooks';
import { isEqual, toString } from '../common/index.js';

let testCount = 0;
let passedTestCount = 0;
let failedTestInfo = [];

export const expect = (func, ...args) => {
  testCount++;
  let actualValue;
  let actualError;
  try {
    actualValue = func(...args);
  } catch (error) {
    actualError = `${error.stack}`;
  }
  return {
    toBe: (expectedValue) => {
      if (isEqual(actualValue, expectedValue)) {
        passedTestCount++;
        return;
      }
      failedTestInfo.push(
        `
        ${toString(actualValue)}
        is not equal to
        ${toString(expectedValue)}
        arguments: ${toString(args)}
        error detail: ${toString(actualError)}`
      );
      return;
    },
    toErr: (expectedError) => {
      if (isEqual(actualError, expectedError)) {
        passedTestCount++;
        return;
      }
      failedTestInfo.push(
        `
        ${toString(actualError)}
        is not equal to
        ${toString(expectedError)}
        arguments: ${toString(args)}
        error detail: ${toString(actualError)}`
      );
      return;
    },
  };
};

export const it = (name, callback) => {
  testCount = 0;
  passedTestCount = 0;
  failedTestInfo = [];
  const start = performance.now();
  callback();
  const end = performance.now();
  const summary = `Problem ${name}
    ${passedTestCount} tests passed
    ${failedTestInfo.length} tests failed
    average ${((end - start) / testCount).toFixed(2)} ms`;
  if (failedTestInfo.length > 0) {
    const detail = failedTestInfo
      .map((info) => `\n    Error: ${info}`)
      .join('');
    console.error(`${summary}${detail}`);
    return;
  }
  console.log(summary);
};
