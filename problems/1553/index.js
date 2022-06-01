// 深度优先遍历--递归版
// /**
//  * @param {number} n
//  * @return {number}
//  */
// const minDays = (n) => {
//   const cache = [0, 1];
//   const calcMinDays = (num) => {
//     if (typeof cache[num] === 'number') {
//       return cache[num];
//     }
//     let isThr = num % 3 === 0;
//     let isEve = num % 2 === 0;
//     let [case3, case2, case1] = [Infinity, Infinity, Infinity];
//     if (isThr) {
//       case3 = calcMinDays(num / 3);
//     }
//     if (isEve) {
//       case2 = calcMinDays(num / 2);
//     }
//     case1 = calcMinDays(num - 1);
//     cache[num] = Math.min(case1, case2, case3) + 1;
//     return cache[num];
//   }
//   return calcMinDays(n);
// }
// 动态规划
// /**
//  * @param {number} n
//  * @return {number}
//  */
// const minDays = (n) => {
//   const cache1 = [0, 1];
//   const cache2 = [0];
//   const cache3 = [0];
//   const get = (array, index) => {
//     if (typeof array[index] === 'number') {
//       return array[index];
//     }
//     return Infinity;
//   }
//   for (let i = 2; i <= n; i++) {
//     let index1 = i - 1;
//     cache1[i] =
//       Math.min(get(cache1, index1), get(cache2, index1), get(cache3, index1)) +
//       1;
//     if (i % 2 === 0) {
//       let index2 = i / 2;
//       cache2[i] =
//         Math.min(
//           get(cache1, index2),
//           get(cache2, index2),
//           get(cache3, index2)
//         ) + 1;
//     }
//     if (i % 3 === 0) {
//       let index3 = i / 3;
//       cache3[i] =
//         Math.min(
//           get(cache1, index3),
//           get(cache2, index3),
//           get(cache3, index3)
//         ) + 1;
//     }
//   }
//   return Math.min(get(cache1, n), get(cache2, n), get(cache3, n));
// }
// 深度优先遍历--循环版
// /**
//  * @param {number} n
//  * @return {number}
//  */
// const minDays = (n) => {
//   // [n, 0], n代表当前数字，0代表已遍历的分支
//   const stack = [[n, 0]];
//   let minCount = Infinity;
//   let curCount = 0;
//   while (stack.length !== 0) {
//     const cur = stack[stack.length - 1];
//     if (cur[0] === 1) {
//       if (curCount + 1 < minCount) {
//         minCount = curCount + 1;
//       }
//       curCount--;
//       stack.pop();
//     } else if (cur[1] === 0) {
//       cur[1] = 1;
//       stack.push([cur[0] - 1, 0]);
//       curCount++;
//     } else if (cur[1] === 1) {
//       cur[1] = 2;
//       if (cur[0] % 2 === 0) {
//         curCount++;
//         stack.push([cur[0] / 2, 0]);
//       }
//     } else if (cur[1] === 2) {
//       cur[1] = 3;
//       if (cur[0] % 3 === 0) {
//         curCount++;
//         stack.push([cur[0] / 3, 0]);
//       }
//     } else {
//       curCount--;
//       stack.pop();
//     }
//   }
//   return minCount;
// }
// 深度优先遍历--递归优化版
/**
 * @param {number} n
 * @return {number}
 */
const minDays = (n) => {
  const cache = [0, 1, 2, 2];
  const calcMinDays = (num) => {
    if (typeof cache[num] === 'number') {
      return cache[num];
    }
    let case2 = calcMinDays(Math.floor(num / 2)) + (num % 2);
    let case3 = calcMinDays(Math.floor(num / 3)) + (num % 3);
    cache[num] = Math.min(case2, case3) + 1;
    return cache[num];
  };
  return calcMinDays(n);
};
