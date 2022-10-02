import { performance } from 'perf_hooks';
import { isEqual, toString } from '../common/index.js';

let testCount = 0;
let passedTestCount = 0;
let failedTestInfo = [];
class Test {
  constructor(actualFunc) {
    this.actualFunc = actualFunc;
  }
  call(...actualArgs) {
    this.actualArgs = actualArgs;
    try {
      this.actualVal = this.actualFunc(...actualArgs);
    } catch (error) {
      this.actualErr = error;
    }
    return this;
  }
  argsToBe(...expectedArgs) {
    if (isEqual(this.actualArgs, expectedArgs)) {
      passedTestCount++;
      return this;
    }
    failedTestInfo.push(
      `
      ${toString(this.actualArgs)}
      is not equal to
      ${toString(expectedArgs)}
      arguments: ${toString(this.actualArgs)}
      error detail: ${toString(this.actualErr.stack)}`
    );
    return this;
  }
  toBe(expectedVal) {
    if (isEqual(this.actualVal, expectedVal)) {
      passedTestCount++;
      return this;
    }
    failedTestInfo.push(
      `
      ${toString(this.actualVal)}
      is not equal to
      ${toString(expectedVal)}
      arguments: ${toString(this.actualArgs)}
      error detail: ${toString(this.actualErr.stack)}`
    );
    return this;
  }
  toErr(expectedErr) {
    if (isEqual(this.actualErr.message, expectedErr)) {
      passedTestCount++;
      return this;
    }
    failedTestInfo.push(
      `
      ${toString(this.actualErr.message)}
      is not equal to
      ${toString(expectedErr)}
      arguments: ${toString(this.actualArgs)}
      error detail: ${toString(this.actualErr.stack)}`
    );
    return this;
  }
}
export const expect = (func) => {
  testCount++;
  return new Test(func);
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
