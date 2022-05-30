/**
 * @param {number[]} nums
 * @return {number[]}
 */
const smallerNumbersThanCurrent = (nums) => {
  const numsCount = [];
  const setNumsCount = (i, c) => {
    const count = numsCount[i];
    if (typeof count === 'number') {
      numsCount[i] = count + c;
    } else {
      numsCount[i] = c;
    }
  }
  const quickCount = (arr) => {
    if (arr.length == 0) {
      return;
    }
    const left = [];
    const right = [];
    const middle = [];
    const cur = arr[0];
    for (let i = 0; i < arr.length; i++) {
      const ele = arr[i];
      if (ele.n < cur.n) {
        left.push(ele);
      } else if (ele.n > cur.n) {
        right.push(ele);
      } else {
        middle.push(ele);
      }
    }
    const middleCount = left.length;
    for (let i = 0; i < middle.length; i++) {
      const ele = middle[i];
      setNumsCount(ele.i, middleCount);
    }
    const rightCount = left.length + middle.length;
    for (let i = 0; i < right.length; i++) {
      const ele = right[i];
      setNumsCount(ele.i, rightCount);
    }
    quickCount(left);
    quickCount(right);
  }
  const indexNums = nums.map((n, i) => ({ n, i }));
  quickCount(indexNums);
  return numsCount;
};