/**
 * 移动指定字符到指定位置
 * @param {string[]} arr
 * @param {string} char
 * @param {number} index
 */
function myMove(arr, char, index) {
  let j = index;
  for (let i = index; i < arr.length; i++) {
    // 与指定字符相同则交换位置
    if (arr[i] === char) {
      [arr[i], arr[j]] = [arr[j], arr[i]];
      j++;
    }
  }
  return j;
}
/**
 * 字符串按指定顺序排序
 * @param {string[]} arr 待排序数组
 * @param {string[]} charSortArr 输出的数组中的字符顺序
 */
function mySort(arr, charSortArr) {
  if (arr.length <= 1) {
    return arr;
  }
  let startIndex = 0;
  for (let k = 0; k < charSortArr.length; k++) {
    const char = charSortArr[k];
    // 移动指定字符到指定位置
    startIndex = myMove(arr, char, startIndex);
  }
}
