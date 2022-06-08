const FizzBuzz = 'FizzBuzz';
const Fizz = 'Fizz';
const Buzz = 'Buzz';
/**
 * @param {number} n
 * @return {string[]}
 */
export const fizzBuzz = (n) => {
  const res = [];
  for (let i = 0; i < n; i++) {
    const num = i + 1;
    const isFizz = num % 3 === 0;
    const isBuzz = num % 5 === 0;
    if (isFizz && isBuzz) {
      res[i] = FizzBuzz;
    } else if (isFizz) {
      res[i] = Fizz;
    } else if (isBuzz) {
      res[i] = Buzz;
    } else {
      res[i] = `${num}`;
    }
  }
  return res;
};
