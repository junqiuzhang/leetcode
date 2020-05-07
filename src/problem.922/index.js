/**
 * 标签：排序
 */
/**
 * @param {number[]} A
 * @return {number[]}
 */
var sortArrayByParityII = function(A) {
  const odd = []
  const even = []
  const index = []
  for (let i = 0; i < A.length; i++) {
    const element = A[i];
    if (i % 2 !== element % 2) {
      index.push(i)
      if (element % 2) {
        odd.push(element)
      } else {
        even.push(element)
      }
    }
  }
  for (let i = 0; i < index.length; i++) {
    const element = index[i];
    if (element % 2) {
      A[element] = odd.pop()
    } else {
      A[element] = even.pop()
    }
  }
  return A
};
var a = [4,2,5,7]
console.log(sortArrayByParityII(a));
