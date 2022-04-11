import { performance } from 'perf_hooks';
import { isObject, isEqual } from 'lodash-es';

let testCount = 0;

function isCorrect(actualValue, expectedValue) {
  if (isObject) {
    return isEqual(actualValue, expectedValue);
  }
  return actualValue === expectedValue;
}

export function expect(actualValue) {
  testCount++;
  return {
    toBe: (expectedValue) => {
      if (isCorrect(actualValue, expectedValue)) {
        console.log(`Test passed`);
        return;
      }
      console.log(`Test failed: ${actualValue} is not equal to ${expectedValue}`);
      return;
    }
  }
}

export function it(name, callback) {
  testCount = 0;
  console.log(`Test Suite: ${name}`)
  const start = performance.now();
  callback();
  const end = performance.now();
  console.log(`Test latency: ${((end - start) / testCount).toFixed(2)} ms`);
}
