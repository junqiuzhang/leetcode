/**
 * @param {number[]} numbers
 * @return {number}
 */
function minArray(numbers) {
  let left = 0;
  let right = numbers.length - 1;
  let middle = Math.floor((left + right) / 2);
  while (right - left > 1) {
    middle = Math.floor((left + right) / 2);
    if (numbers[middle] <= numbers[right]) {
      right = middle;
    } else {
      left = middle
    }
  }
  return Math.min(numbers[left], numbers[right]);
};
var nums = [3,3,1,3]
console.log(minArray(nums));