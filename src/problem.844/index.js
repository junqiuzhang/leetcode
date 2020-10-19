/**
 * @param {string} S
 * @param {string} T
 * @return {boolean}
 */
var backspaceCompare = function (S, T) {
  function replaceSharp(str) {
    while (true) {
      temp = str.replace(/[^#]?#/, '');
      if (temp === str) {
        break;
      } else {
        str = temp;
      }
    }
    return str;
  }
  return replaceSharp(S) === replaceSharp(T);
};