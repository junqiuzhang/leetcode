const fizz = "Fizz";
const buzz = "Buzz";
/**
 * @param {number} n
 * @return {string[]}
 */
const fizzBuzz = (n) => {
  const res = [];
  for (let i = 0; i < n; i++) {
    let cur = "";
    if ((i + 1) % 3 === 0) {
      cur += fizz;
    }
    if ((i + 1) % 5 === 0) {
      cur += buzz;
    }
    if (cur === "") {
      cur = `${i + 1}`;
    }
    res.push(cur);
  }
  return res;
};
