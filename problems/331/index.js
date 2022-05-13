const MinimumTreeReg = /\d+,#,#/;
/**
 * @param {string} preorder
 * @return {boolean}
 */
var isValidSerialization = function (preorder) {
  // 递归化简
  let tree = preorder;
  if (tree === '#') return true;
  if (tree[0] === '#' || tree[tree.length - 1] !== '#') return false;
  let len = tree.length;
  while (true) {
    tree = tree.replace(MinimumTreeReg, '#');
    if (len === tree.length) break;
    len = tree.length;
  }
  if (tree === '#') return true;
  return false;
};
