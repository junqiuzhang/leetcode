import { TreeNode } from '../common/index.js';
/**
 * Definition for a binary tree node.
 * const TreeNode = (val, left, right) => {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root1
 * @param {TreeNode} root2
 * @return {TreeNode}
 */
const mergeTrees = (root1, root2) => {
  if (!root1 && !root2) {
    return null;
  }
  if (root1 && !root2) {
    return root1;
  }
  if (!root1 && root2) {
    return root2;
  }
  const tempLeft = mergeTrees(root1.left, root2.left);
  const tempRight = mergeTrees(root1.right, root2.right);
  const tempVal = root1.val + root2.val;
  return new TreeNode(tempVal, tempLeft, tempRight);
};
