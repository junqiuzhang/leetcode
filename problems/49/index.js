/**
 * @param {string[]} strs
 * @return {string[][]}
 */
var groupAnagrams = function (strs) {
  const getCharCodeCountKey = (s) => {
    const charCodeCountArray = [];
    for (let i = 0; i < s.length; i++) {
      if (charCodeCountArray[s[i].charCodeAt() - 97]) {
        charCodeCountArray[s[i].charCodeAt() - 97]++;
      } else {
        charCodeCountArray[s[i].charCodeAt() - 97] = 1;
      }
    }
    return charCodeCountArray.join(',');
  }
  const strMap = new Map();
  for (let i = 0; i < strs.length; i++) {
    const key = getCharCodeCountKey(strs[i]);
    let arr = strMap.get(key);
    if (!Array.isArray(arr)) {
      arr = [];
    }
    arr.push(strs[i])
    strMap.set(key, arr);
  }
  const retArr = [];
  strMap.forEach(item => {
    retArr.push(item);
  })
  return retArr;
};

