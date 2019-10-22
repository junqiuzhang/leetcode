/**
 * @param {number} num
 * @return {boolean}
 */
var isUgly = function(num) {
  var temp = num;
  if (temp == 0) return false;
  while (!(temp % 2) || !(temp % 3) || !(temp % 5)) {
      if (!(temp % 2)) temp = temp / 2;
      if (!(temp % 3)) temp = temp / 3;
      if (!(temp % 5)) temp = temp / 5;
  }
  if (temp == 1) return true;
  return false;
};