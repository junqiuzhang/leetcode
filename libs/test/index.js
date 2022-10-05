import { performance } from 'perf_hooks';
import { isEqual, toString } from '../common/index.js';

let currentTest = null;
let currentTestCase = null;
class TestCase {
  constructor(func = () => {}) {
    this.func = func;
    this.args = [];
    this.val = undefined;
    this.err = new Error();
    this.startTime = 0;
    this.endTime = 0;
  }
  apply(args) {
    this.args = args;
    this.test();
    return this;
  }
  call(...args) {
    this.args = args;
    this.test();
    return this;
  }
  argsToBe(...expectedArgs) {
    this.expectedArgs = expectedArgs;
    if (!isEqual(this.args, expectedArgs)) {
      this.report(this.args, expectedArgs);
      return;
    }
    this.report();
  }
  toReturn(expectedVal) {
    this.expectedVal = expectedVal;
    if (!isEqual(this.val, expectedVal)) {
      this.report(this.val, expectedVal);
      return;
    }
    this.report();
  }
  toThrow(expectedErr) {
    this.expectedErr = expectedErr;
    if (!isEqual(this.err.message, expectedErr)) {
      this.report(this.err.message, expectedErr);
      return;
    }
    this.report();
  }
  test() {
    this.startTime = performance.now();
    try {
      this.val = this.func(...this.args);
    } catch (err) {
      this.err = err;
    }
    this.endTime = performance.now();
  }
  report(actualVal, expectedVal) {
    if (actualVal !== expectedVal) {
      const summary = `
      ${toString(actualVal)}
      is not equal to
      ${toString(expectedVal)}`;
      const detail = `
      arguments: ${toString(this.args)}
      returns: ${toString(this.val)}
      errors: ${toString(this.err.stack)}`;
      currentTest.addTestCase(`${summary}${detail}`);
      return;
    }
    currentTest.addTestCase(``);
  }
}
class Test {
  constructor(name = '', func = () => {}) {
    this.name = name;
    this.func = func;
    this.startTime = 0;
    this.endTime = 0;
    this.testCases = [];
  }
  addTestCase(testCase) {
    this.testCases.push(testCase);
  }
  removeTestCase(testCase) {
    this.testCases = this.testCases.filter((tc) => tc === testCase);
  }
  test() {
    this.startTime = performance.now();
    this.func();
    this.endTime = performance.now();
  }
  report() {
    const succeedTestCases = this.testCases.filter((tc) => !tc);
    const failedTestCases = this.testCases.filter((tc) => !!tc);
    const summary = `Problem ${this.name}
      ${succeedTestCases.length} tests passed
      ${failedTestCases.length} tests failed
      total ${((this.endTime - this.startTime) / this.testCases.length).toFixed(
        2
      )} ms`;
    if (failedTestCases.length > 0) {
      const detail = failedTestCases
        .map((tc) => `\n      Error: ${tc}`)
        .join('');
      console.log(`${summary}${detail}`);
      return;
    }
    console.log(summary);
  }
}
export const expect = (func) => {
  currentTestCase = new TestCase(func);
  return currentTestCase;
};

export const it = (name, func) => {
  currentTest = new Test(name, func);
  currentTest.test();
  currentTest.report();
};
