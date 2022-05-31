const MAX_NUMBER = Math.pow(10, 9) + 7;
/**
 * @param {string} s
 * @return {number}
 */
const numSub = (s) => {
  const lengthArray = [];
  let preIsOne = false;
  let preLength = 0;
  let subNum = 0;

  for (let i = 0; i < s.length; i++) {
    const char = s[i];
    if (char === "1") {
      preLength++;
      preIsOne = true;
    } else {
      lengthArray.push(preLength);
      preLength = 0;
      preIsOne = false;
    }
  }

  if (preIsOne) {
    lengthArray.push(preLength);
  }

  for (let i = 0; i < lengthArray.length; i++) {
    const length = lengthArray[i];
    subNum += ((length * (length + 1)) / 2) % MAX_NUMBER;
  }

  return subNum;
};
