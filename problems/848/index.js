/**
 * 
 * @param {string} letter 
 * @param {number} num
 * @return {string} 
 */
const shiftLetter = (letter, num) => {
  const index = letter.charCodeAt(0);
  return String.fromCharCode((index + num - 97) % 26 + 97)
}
/**
 * @param {string} s
 * @param {number[]} shifts
 * @return {string}
 */
const shiftingLetters = (s, shifts) => {
  let res = '';
  let sum = 0;
  for (let i = shifts.length - 1; i > -1; i--) {
    sum += shifts[i];
    shifts[i] = sum;
  }
  for (let i = 0; i < s.length; i++) {
    res += shiftLetter(s[i], shifts[i])
  }
  return res;
};