/**
 * @param {number[]} arr 
 * @param {number} k 
 */
function pancakeFlips(arr, k) {
  if (k < 0 || k > arr.length) return;
  const len = Math.floor((k - 1) / 2);
  for (let j = 0; j <= len; j++) {
    [arr[j], arr[k - j - 1]] = [arr[k - j - 1], arr[j]];
  }
}
/**
 * @param {number[]} arr
 * @return {number[]}
 */
function pancakeSort(arr) {
  const ans = [];
  let num = arr.length;
  while (num > 1) {
    let index = arr.indexOf(num);
    if (index + 1 !== num) {
      if (index !== 0) {
        pancakeFlips(arr, index + 1);
        ans.push(index + 1);
      }
      if (num !== 1) {
        pancakeFlips(arr, num);
        ans.push(num);
      }
    }
    num--;
  }
  return ans;
};
