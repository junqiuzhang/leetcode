import { performance } from "perf_hooks";
import { parentPort } from "worker_threads";
import { isObject, isEqual } from "lodash-es";

let testCount = 0;
function log(info) {
  parentPort.postMessage(info);
}
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
        log(`Test passed`);
        return;
      }
      log(`Test failed: ${actualValue} is not equal to ${expectedValue}`);
      return;
    },
    toErr: (expectedError) => {
      if (isSameError(actualError, expectedError)) {
        log(`Test passed`);
        return;
      }
      log(`Test failed: ${actualValue} is not equal to ${expectedValue}`);
      return;
    },
  };
}

export function it(name, callback) {
  testCount = 0;
  log(`Test problem: ${name}`);
  const start = performance.now();
  callback();
  const end = performance.now();
  log(`Test latency: ${((end - start) / testCount).toFixed(2)} ms`);
}
