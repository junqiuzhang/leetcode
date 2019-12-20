/**
 * 数据结构：数组
 * 算法：双指针遍历
 */
/**
 * @param {character[]} chars
 * @return {number}
 */
var compress = function (chars) {
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
        if (num >= 10) {
          /** 
           * 简化方法
           * ['12'] => ['1','2']
          */
          var tempNumArr = [];
          tempNumArr = String(num).split('');
          for (var i = 0; i < tempNumArr.length; i++) {
            chars[writeIndex] = tempNumArr[i];
            writeIndex++;
          }
          /** 
           * 通用方法
           * ['12'] => ['1','2']
          */
          // var tempNum = num;
          // var tempNumArr = [];
          // while (tempNum >= 1) {
          //   tempNumArr.push(tempNum % 10);
          //   tempNum = Math.floor(tempNum / 10);
          // }
          // tempNumArr.reverse();
          // for (var i = 0; i < tempNumArr.length; i++) {
          //   chars[writeIndex] = String(tempNumArr[i]);
          //   writeIndex++;
          // }
        } else {
          chars[writeIndex] = String(num);
          writeIndex++;
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