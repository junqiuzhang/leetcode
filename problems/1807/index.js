/**
 * @param {string} s
 * @param {string[][]} knowledge
 * @return {string}
 */
const evaluate = (s, knowledge) => {
  const dicMap = new Map();
  for (let i = 0; i < knowledge.length; i++) {
    const [key, value] = knowledge[i];
    dicMap.set(key, value);
  }
  let ans = '';
  let key = '';
  let isInBracket = false;
  for (let i = 0; i < s.length; i++) {
    const char = s[i];
    if (char === '(') {
      isInBracket = true;
      key = '';
    } else if (char === ')') {
      isInBracket = false;
      ans += dicMap.get(key) || '?';
    } else {
      if (isInBracket) {
        key += char;
      } else {
        ans += char;
      }
    }
  }
  return ans;
};
