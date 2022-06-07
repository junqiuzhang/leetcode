/**
 * @param {string} num
 * @param {number} k
 * @return {string}
 */
export const removeKdigits = (num, k) => {
  const stack = [];
  for (let i = 0; i < num.length; i++) {
    while (stack.length > 0 && stack[stack.length - 1] > num[i] && k) {
      stack.pop();
      k -= 1;
    }
    stack.push(num[i]);
  }
  for (; k > 0; --k) {
    stack.pop();
  }
  let ans = '';
  for (let i = 0; i < stack.length; i++) {
    if (ans === '' && stack[i] === '0') {
      continue;
    }
    ans += stack[i];
  }
  return ans === '' ? '0' : ans;
};
