// 链表元素
function ListNode(val) {
  this.val = val;
  this.next = null;
}
// 树元素
function TreeNode(val) {
  this.val = val;
  this.left = this.right = null;
}
// 数组转链表
function array2list(arr) {
  if (arr.length == 0 || arr.length == 1 && typeof arr[0] != 'number') {
    return null;
  }
  var listNode = new ListNode();
  var node = listNode;
  for (var i = 0; i < arr.length; i++) {
    node.next = new ListNode(arr[i]);
    node = node.next;
  }
  return listNode.next;
}
// 数组转二叉树
function array2tree(arr) {
  if (arr.length == 0 || arr.length == 1 && typeof arr[0] != 'number') {
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
// 快排
function quickSort(arr, compare) {
  if (arr.length <= 1) {
    return arr;
  }
  const left = [];
  const right = [];
  const middle = arr[0];
  for (let i = 1; i < arr.length; i++) {
    const ele = arr[i];
    if (compare(ele, middle)) {
      left.push(ele);
    } else {
      right.push(ele);
    }
  }
  const sortedLeft = quickSort(left, compare);
  const sortedRight = quickSort(right, compare);
  return sortedLeft.concat([middle]).concat(sortedRight);
}
exports.ListNode = ListNode;
exports.TreeNode = TreeNode;
exports.array2tree = array2tree;
exports.array2list = array2list;
exports.quickSort = quickSort;