import { performance } from "perf_hooks";
import { isObject, isEqual, toString } from "lodash-es";

let testCount = 0;
let passedTestCount = 0;
let failedTestInfo = [];
const stringify = (param) => {
  let str;
  try {
    str = JSON.stringify(param);
  } catch (error) {
    str = toString(param);
  }
  return str;
};
const isSameValue = (actualValue, expectedValue) => {
  if (isObject(actualValue) && isObject(expectedValue)) {
    return isEqual(actualValue, expectedValue);
  }
  return actualValue === expectedValue;
};
const isSameError = (actualError, expectedError) => {
  if (isObject(actualError) && isObject(expectedError)) {
    return actualError.message === expectedError.message;
  }
  return actualError === expectedError;
};

export const expect = (func, ...args) => {
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
        passedTestCount++;
        return;
      }
      failedTestInfo.push(
        `${stringify(actualValue)} is not equal to ${stringify(expectedValue)}
        arguments: ${stringify(args)}
        error detail: ${stringify(actualError)}`
      );
      return;
    },
    toErr: (expectedError) => {
      if (isSameError(actualError, expectedError)) {
        passedTestCount++;
        return;
      }
      failedTestInfo.push(
        `${stringify(actualError)} is not equal to ${stringify(expectedError)}
        arguments: ${stringify(args)}
        error detail: ${stringify(actualError)}`
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
  console.log(
    `Problem ${name}
    ${passedTestCount} tests passed
    ${failedTestInfo.length} tests failed
    average ${((end - start) / testCount).toFixed(2)} ms
    ${
      failedTestInfo.length > 0
        ? failedTestInfo.map((info) => `Error: ${info}`).join("\n    ")
        : ``
    }`
  );
};
