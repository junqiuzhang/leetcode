const { array2tree } = require("../common");
/**
 * @param {TreeNode} root
 * @return {TreeNode}
 */
const transformIncreasingTree = (root) => {
  let [leftRoot, leftLeaf, rightRoot, rightLeaf] = [root, root, root, root];
  if (root.left) {
    [leftRoot, leftLeaf] = transformIncreasingTree(root.left);
    leftLeaf.right = root;
  }
  root.left = null;
  if (root.right) {
    [rightRoot, rightLeaf] = transformIncreasingTree(root.right);
    root.right = rightRoot;
  }
  rightLeaf.right = null;
  return [leftRoot, rightLeaf];
};
/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root
 * @return {TreeNode}
 */
const increasingBST = (root) => {
  const [increasingRoot] = transformIncreasingTree(root);
  return increasingRoot;
};
var a = [5, 3, 6, 2, 4, null, 8, 1, null, null, null, 7, 9];
var root = array2tree(a);
console.log(JSON.stringify(root));
console.log(JSON.stringify(increasingBST(root)));
