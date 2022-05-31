/**
 * @param {string} name
 * @param {string} typed
 * @return {boolean}
 */
const isLongPressedName = (name, typed) => {
  const nameArr = string2array(name);
  const typedArr = string2array(typed);
  const string2array = (str) => {
    const arr = [];
    let preChar = "";
    let preCount = 1;
    for (let i = 0; i <= str.length; i++) {
      const char = str[i];
      if (char === preChar) {
        arr.push({ char: preChar, count: preCount });
        preChar = char;
        preCount = 1;
      } else {
        preCount++;
      }
    }
    return arr;
  };
  if (nameArr.length !== typedArr.length) {
    return false;
  }
  for (let i = 0; i < nameArr.length; i++) {
    const nameItem = nameArr[i];
    const typedItem = typedArr[i];
    if (nameItem.char !== typedItem.char || nameItem.count > typedItem.count) {
      return false;
    }
  }
  return true;
};
