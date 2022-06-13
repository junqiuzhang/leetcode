const FizzBuzz = 'FizzBuzz';
const Fizz = 'Fizz';
const Buzz = 'Buzz';
/**
 * @param {number} n
 * @return {string[]}
 */
export const fizzBuzz = (n) => {
  const ans = [];
  for (let i = 0; i < n; i++) {
    const num = i + 1;
    const isFizz = num % 3 === 0;
    const isBuzz = num % 5 === 0;
    if (isFizz && isBuzz) {
      ans[i] = FizzBuzz;
    } else if (isFizz) {
      ans[i] = Fizz;
    } else if (isBuzz) {
      ans[i] = Buzz;
    } else {
      ans[i] = `${num}`;
    }
  }
  return ans;
};
