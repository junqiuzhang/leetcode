import { TreeNode } from "../../libs/common/index.js";
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
    const val = (pre << 1) + root.val;
    if (!root.left && !root.right) {
      sum += val;
      return;
    }
    if (root.left) {
      sumEachRootToLeaf(root.left, val);
    }
    if (root.right) {
      sumEachRootToLeaf(root.right, val);
    }
  };
  sumEachRootToLeaf(root, 0);
  return sum;
};
