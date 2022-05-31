/**
 * 数据结构：字符串 数组
 * 算法：字符串操作 双指针遍历
 */
/**
 * @param {character[]} chars
 * @return {number}
 */
const compress = (chars) => {
  // 字符串操作 最快
  for (let i = 0; i < chars.length; i++) {
    if (chars[i + 1] !== chars[i]) {
      i++;
      chars.splice(i, 0, "$$$$$$");
    }
  }
  let tempChars = chars
    .join("")
    .split("$$$$$$")
    .filter((c) => c);
  let tempLength = 0;
  for (let i = 0; i < tempChars.length; i++) {
    chars[tempLength] = tempChars[i][0];
    tempLength++;
    if (tempChars[i].length > 1) {
      if (tempChars[i].length < 10) {
        chars[tempLength] = String(tempChars[i].length);
        tempLength++;
      } else {
        let tempNums = String(tempChars[i].length).split("");
        for (let j = 0; j < tempNums.length; j++) {
          chars[tempLength] = tempNums[j];
          tempLength++;
        }
      }
    }
  }
  chars.length = tempLength;
  return chars.length;
};

/**
 * @param {character[]} chars
 * @return {number}
 */
const compress2 = (chars) => {
  // 双指针遍历 次快
  let writeIndex = 0;
  let readIndex = 0;
  let pre = chars[writeIndex];
  let cur = chars[readIndex];
  let num = 0;
  while (readIndex <= chars.length) {
    cur = chars[readIndex];
    if (pre === cur) {
      num++;
    } else {
      chars[writeIndex] = pre;
      writeIndex++;
      if (num > 1) {
        if (num < 10) {
          chars[writeIndex] = String(num);
          writeIndex++;
        } else {
          let tempNums = String(num).split("");
          for (let i = 0; i < tempNums.length; i++) {
            chars[writeIndex] = tempNums[i];
            writeIndex++;
          }
        }
      }
      pre = cur;
      num = 1;
    }
    readIndex++;
  }
  chars.length = writeIndex;
  return chars.length;
};
