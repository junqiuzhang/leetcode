function expect(actualValue) {
  return {
    toBe: (expectedValue) => {
      if (actualValue === expectedValue) {
        console.log(`Test passed.\n`);
        return;
      }
      console.log(`Test failed: ${actualValue} is not equal to ${expectedValue}`);
      return;
    }
  }
}

export default expect;
