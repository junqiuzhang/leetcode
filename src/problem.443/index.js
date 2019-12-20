/**
 * 数据结构：数组
 * 算法：双指针遍历
 */
/**
 * @param {character[]} chars
 * @return {number}
 */
var compress = function (chars) {
  // 字符串操作 最快
  for (var i = 0; i < chars.length; i++) {
    if (chars[i + 1] !== chars[i]) {
      i++;
      chars.splice(i, 0, '$$$$$$');
    }
  }
  var tempChars = chars.join('').split('$$$$$$').filter(c => c);
  var tempLength = 0;
  for (var i = 0; i < tempChars.length; i++) {
    chars[tempLength] = tempChars[i][0];
    tempLength++;
    if (tempChars[i].length > 1) {
      if (tempChars[i].length < 10) {
        chars[tempLength] = String(tempChars[i].length);
        tempLength++;
      } else {
        var tempNums = String(tempChars[i].length).split('');
        for (var j = 0; j < tempNums.length; j++) {
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
var compress2 = function (chars) {
  // 双指针 次快
  var writeIndex = 0;
  var readIndex = 0;
  var pre = chars[writeIndex];
  var cur = chars[readIndex];
  var num = 0;
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
          var tempNums = String(num).split('');
          for (var i = 0; i < tempNums.length; i++) {
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
}