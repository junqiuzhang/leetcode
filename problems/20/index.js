const CharNumMap = {
  '(': 1,
  '[': 2,
  '{': 3,
  ')': -1,
  ']': -2,
  '}': -3,
};
/**
 * @param {string} s
 * @return {boolean}
 */
const isValid = (s) => {
  const len = s.length;
  if (len === 0) {
    return true;
  }
  if (len % 2 === 1) {
    return false;
  }
  const stack = [];
  for (let i = 0; i < s.length; i++) {
    const char = s[i];
    const num = CharNumMap[char];
    if (num < 0) {
      if (stack.pop() + num !== 0) {
        return false;
      }
    } else {
      stack.push(num);
    }
  }
  return stack.length === 0;
};
