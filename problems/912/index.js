// /**
//  * @param {number[]} nums
//  * @return {number[]}
//  */
// const sortArray = (nums) => {
//   return nums.sort((a, b) => {
//     return a - b;
//   })
// };
/**
 * @param {number[]} nums
 * @return {number[]}
 */
const sortArray = (nums) => {
  if (nums.length <= 1) {
    return nums;
  }
  let left = 0;
  let right = nums.length - 1;
  let pivot = 0;
  const stack = [left, right];
  while (stack.length > 0) {
    right = stack.pop();
    left = stack.pop();
    if (left >= right) continue;
    pivot = nums[right];
    let i = left;
    for (let j = left; j <= right; j++) {
      if (nums[j] <= pivot) {
        [nums[i], nums[j]] = [nums[j], nums[i]];
        i++;
      }
    }
    stack.push(left, i - 2, i, right);
  }
  return nums;
}
