// /**
//  * @param {number} n
//  * @param {number} k
//  * @return {number[][]}
//  */
// const combine = (n, k) => {
//   if (k === 0) {
//     return [];
//   }
//   if (k > n) {
//     return [];
//   }
//   if (k === 1) {
//     return new Array(n).fill(0).map((o, i) => [i + 1]);
//   }
//   if (k === n) {
//     return [new Array(k).fill(0).map((o, i) => i + 1)];
//   }
//   return [
//     ...combine(n - 1, k),
//     ...combine(n - 1, k - 1).map((c) => c.concat([n])),
//   ];
// }
/**
 * @param {number} n
 * @param {number} k
 * @return {number[][]}
 */
const combine = (n, k) => {
  if (k === 0) {
    return [];
  }
  if (k > n) {
    return [];
  }
  if (k === 1) {
    return new Array(n).fill(0).map((o, i) => [i + 1]);
  }
  if (k === n) {
    return [new Array(k).fill(0).map((o, i) => i + 1)];
  }
  const res = [];
  let arr = new Array(k).fill(0).map((o, i) => i + 1);
  while (arr[0] < n - k + 1) {
    res.push(arr);
    for (let i = 1; i <= k; i++) {
      if (arr[k - i] < n - i + 1) {
        arr = [...arr];
        arr[k - i]++;
        for (let j = k - i + 1; j < k; j++) {
          arr[j] = arr[j - 1] + 1;
        }
        break;
      }
    }
  }
  res.push(arr);
  return res;
};
