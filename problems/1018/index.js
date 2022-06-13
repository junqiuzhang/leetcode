/**
 * @param {number[]} A
 * @return {boolean[]}
 */
const prefixesDivBy5 = (A) => {
  const ans = [];
  let num = 0;
  for (let i = 0; i < A.length; i++) {
    num = (num * 2 + A[i]) % 5;
    if (num === 0) {
      ans.push(true);
    } else {
      ans.push(false);
    }
  }
  return ans;
};
