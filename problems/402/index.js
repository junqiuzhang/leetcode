/**
 * @param {string} num
 * @param {number} k
 * @return {string}
 */
const removeKdigits = (num, k) => {
  if (num.length === k) {
    return '0';
  }
  const numArray = num.slice(k - num.length).split('');
  let left = -1;
  for (let i = 0; i < num.length - k; i++) {
    let min = numArray[i];
    let minIndex = 0;
    for (let j = k + i; j > left; j--) {
      if (Number(num[j]) <= Number(min)) {
        min = num[j];
        minIndex = j;
      }
    }
    numArray[i] = min;
    left = minIndex;
  }
  return numArray.join('').replace(/^0*/, '') || '0';
};
