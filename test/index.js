import { performance } from "perf_hooks";
import { isObject, isEqual } from "lodash-es";

let testCount = 0;

function isSameValue(actualValue, expectedValue) {
  if (isObject(actualValue) && isObject(expectedValue)) {
    return isEqual(actualValue, expectedValue);
  }
  return actualValue === expectedValue;
}
function isSameError(actualError, expectedError) {
  if (isObject(actualError) && isObject(expectedError)) {
    return actualError.message === expectedError.message;
  }
  return actualError === expectedError;
}

export function expect(func, ...args) {
  testCount++;
  let actualValue;
  let actualError;
  try {
    actualValue = func(...args);
  } catch (error) {
    actualError = error.message;
  }
  return {
    toBe: (expectedValue) => {
      if (isSameValue(actualValue, expectedValue)) {
        console.log(`Test passed`);
        return;
      }
      console.error(
        `Test failed: ${actualValue} is not equal to ${expectedValue}`
      );
      return;
    },
    toError: (expectedError) => {
      if (isSameError(actualError, expectedError)) {
        console.log(`Test passed`);
        return;
      }
      console.error(
        `Test failed: ${actualValue} is not equal to ${expectedValue}`
      );
      return;
    },
  };
}

export function it(name, callback) {
  testCount = 0;
  console.log(`Test Suite: ${name}`);
  const start = performance.now();
  callback();
  const end = performance.now();
  console.log(`Test latency: ${((end - start) / testCount).toFixed(2)} ms`);
}
