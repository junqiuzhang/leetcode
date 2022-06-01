/**
 * @param {string} s
 * @return {number[]}
 */
export const diStringMatch = (s) => {
  let min = 0;
  let max = s.length;
  const ans = [];
  for (let i = 0; i < s.length; i++) {
    if (s[i] === 'I') {
      ans.push(min);
      min++;
    } else {
      ans.push(max);
      max--;
    }
  }
  ans.push(min);
  return ans;
};
