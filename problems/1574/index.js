/**
 * @param {number[]} arr
 * @return {number}
 */
const findLengthOfShortestSubarray = (arr) => {
  let startLeft = -1;
  let startRight = -1;
  for (let i = 0; i < arr.length; i++) {
    if (arr[i + 1] < arr[i]) {
      startLeft = i;
      break;
    }
  }
  for (let i = arr.length - 1; i > 0; i--) {
    if (arr[i - 1] > arr[i]) {
      startRight = i - 1;
      break;
    }
  }
  if (startLeft === -1) {
    return 0;
  }
  for (let len = 0; len < arr.length; len++) {
    for (let leftLen = 0; leftLen < len; leftLen++) {
      const left = startLeft - leftLen;
      const right = startRight + len - leftLen;
      if (left < 0 || right > arr.length - 1 || arr[left] <= arr[right]) {
        return right - left - 1;
      }
    }
  }
  return arr.length - 1;
}
