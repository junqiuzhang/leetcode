import { TreeNode } from "../common/index.js";
/**
 * Definition for a binary tree node.
 * const TreeNode = (val, left, right) => {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number}
 */
export const sumRootToLeaf = (root) => {
  let sum = 0;
  const sumEachRootToLeaf = (root, pre) => {
    if (!root) {
      return;
    }
    const val = (pre << 1) + root.val;
    if (!root.left && !root.right) {
      sum += val;
      return;
    }
    sumEachRootToLeaf(root.left, val);
    sumEachRootToLeaf(root.right, val);
  };
  sumEachRootToLeaf(root);
  return sum;
};
