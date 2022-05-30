// /**
//  * @param {number} a
//  * @param {number} b
//  * @return {number}
//  */
// const getSum = (a, b) => {
//   let sum = 0;
//   let bitA = 0;
//   let bitB = 0;
//   let bitC = 0;
//   for (let i = 0; i < 64; i++) {
//     bitA = (a >> i) & 1;
//     bitB = (b >> i) & 1;

//     sum = sum | ((bitA ^ bitB ^ bitC) << i);
//     if ((bitA && bitB) || (bitA && bitC) || (bitB && bitC)) {
//       bitC = 1;
//     } else {
//       bitC = 0;
//     }
//   }
//   sum = sum | bitC;
//   return sum;
// }
/**
 * @param {number} a
 * @param {number} b
 * @return {number}
 */
const getSum = (a, b) => {
  while (b != 0) {
    const c = (a & b) << 1;
    a = a ^ b;
    b = c;
  }
  return a;
}
