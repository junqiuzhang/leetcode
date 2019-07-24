// 数组转二叉树
function array2tree(arr) {
  if (arr.length == 0 || arr.length == 1 && typeof arr[0] == 'object') {
      return null;
  }
  var tree = {};
  var left = [];
  var right = [];
  var i = 0;
  var len = 0;
  var fir = -1;
  while (fir < arr.length) {
      i++;
      len = Math.pow(2, i);
      fir = len - 1;
      left = left.concat(arr.slice(len - 1, len * 3/2 - 1));
      right = right.concat(arr.slice(len * 3/2 - 1, len * 2 - 1));
  }
  tree.val = arr[0];
  tree.left = array2tree(left);
  tree.right = array2tree(right);
  return tree;
}
exports.array2tree = array2tree;