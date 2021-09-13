// const cache = [0, 1];
// /**
//  * @param {number} n
//  * @return {number}
//  */
// function fib(n) {
//   if (typeof cache[n] === 'number') {
//     return cache[n];
//   }
//   const f = fib(n - 1) + fib(n - 2);
//   cache[n] = f;
//   return cache[n];
// };
// /**
//  * @param {number} n
//  * @return {number}
//  */
// function fib(n) {
//   if (n === 0) {
//     return 0;
//   }
//   if (n <= 2) {
//     return 1;
//   }
//   let f0 = 0;
//   let f1 = 1;
//   let f2 = 1;
//   for (let i = 2; i < n; i++) {
//     f0 = f1 + f2;
//     f1 = f2;
//     f2 = f0;
//   }
//   return f2;
// }
const cache = new Int32Array([
  0, 1, 1, 2, 3, 5, 8, 13, 21, 34, 55, 89, 144, 233, 377, 610, 987, 1597, 2584,
  4181, 6765, 10946, 17711, 28657, 46368, 75025, 121393, 196418, 317811, 514229,
  832040,
]);
/**
 * @param {number} n
 * @return {number}
 */
function fib(n) {
  return cache[n];
}
