/**
 * @param {number[]} arr 
 * @param {number} i 
 */
function pancakeFlips(arr, i) {
  if (i < 0 || i > arr.length - 1) return;
  const len = Math.floor(i / 2);
  for (let j = 0; j <= len; j++) {
    [arr[j], arr[i - j]] = [arr[i - j], arr[j]];
  }
}
/**
 * 从1到n逐个拼接
 * @param {number[]} arr
 * @return {number[]}
 */
function pancakeSort(arr) {
  const ans = [];
  let i = 1;
  while (i < arr.length) {
    console.log(i, arr);
    let curIndex = arr.findIndex(n => n === i);
    let nextIndex = arr.findIndex(n => n === i + 1);
    if (curIndex === nextIndex - 1) {
      i++;
      continue;
    }
    if (curIndex !== 0) {
      pancakeFlips(arr, curIndex);
      ans.push(curIndex + 1);
    }
    nextIndex = arr.findIndex(n => n === i + 1);
    if (nextIndex !== 1) {
      pancakeFlips(arr, nextIndex - 1);
      ans.push(nextIndex);
    }
    i++;
  }
  return ans;
};
