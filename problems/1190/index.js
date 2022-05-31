/**
 * @param {string} s
 * @return {string}
 */
const reverseParentheses = (s) => {
  const re = /\(([a-z]*)\)/;
  let temp = s;
  while (temp.includes("(")) {
    const ma = temp.match(re);
    if (ma) {
      temp = temp.replace(ma[0], ma[1].split("").reverse().join(""));
    } else {
      break;
    }
  }
  return temp;
};
