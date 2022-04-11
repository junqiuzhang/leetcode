import { performance } from 'perf_hooks';

let testCount = 0;

export function expect(actualValue) {
  testCount++;
  return {
    toBe: (expectedValue) => {
      if (actualValue === expectedValue) {
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
  if (typeof name === 'string') {
    console.log(`Test Suite: ${name}`)
  } else if (typeof name === 'function') {
    callback = name;
  }
  const start = performance.now();
  callback();
  const end = performance.now();
  console.log(`Test latency: ${((end - start) / testCount).toFixed(2)} ms`);
}
