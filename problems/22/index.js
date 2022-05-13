/**
 * @param {number} n
 * @return {string[]}
 */
function generateParenthesis(n) {
  const ans = [];
  function generate(s, open, close) {
    if (s.length === n * 2) {
      ans.push(s);
    }
    if (open < n) {
      s += '(';
      generate(s, open + 1, close);
      s = s.slice(0, s.length - 1);
    }
    if (close < open) {
      s += ')';
      generate(s, open, close + 1);
      s = s.slice(0, s.length - 1);
    }
  }
  generate('', 0, 0);
  return ans;
}
