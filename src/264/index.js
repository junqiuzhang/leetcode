/**
 * @param {number} n
 * @return {number}
 */
function nthUglyNumber(n) {
  const nums = [1];
  let n2 = 0;
  let n3 = 0;
  let n5 = 0;
  while (nums.length < n) {
    let tempN2 = nums[n2] * 2;
    let tempN3 = nums[n3] * 3;
    let tempN5 = nums[n5] * 5;
    let tempMin = Math.min(tempN2, tempN3, tempN5);
    if (tempMin > nums[nums.length - 1]) {
      nums.push(tempMin);
    }
    switch (tempMin) {
      case tempN2:
        n2++;
        break;
      case tempN3:
        n3++;
        break;
      default:
        n5++;
        break;
    }
  }
  return nums[nums.length - 1];
}
