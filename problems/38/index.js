// /**
//  * 42.04% 32.32%
//  * @param {number} n
//  * @return {string}
//  */
// const countAndSay = (n) => {
//   if (n == 1) {
//     return '1';
//   }
//   let str = '1';
//   for (let i = 1; i < n; i++) {
//     let nextStr = '';
//     let num = str[0];
//     let count = 0;
//     for (let j = 0; j <= str.length; j++) {
//       if (str[j] != num) {
//         nextStr += count + num;
//         num = str[j];
//         count = 0;
//       }
//       count++;
//     }
//     str = nextStr;
//   }
//   return str;
// }
const cache = [, "1"];
/**
 * @param {number} n
 * @return {string}
 */
const countAndSay = (n) => {
  if (cache[n]) {
    return cache[n];
  }
  let str = countAndSay(n - 1);
  let nextStr = "";
  let num = str[0];
  let count = 0;
  for (let j = 0; j <= str.length; j++) {
    if (str[j] != num) {
      nextStr += count + num;
      num = str[j];
      count = 0;
    }
    count++;
  }
  str = nextStr;
  cache[n] = str;
  return cache[n];
};
