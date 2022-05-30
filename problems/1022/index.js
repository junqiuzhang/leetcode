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
 * 9.58% 10.78%
 * @param {TreeNode} root
 * @return {number}
 */
export const sumRootToLeaf = (root) => {
  const sumEachRootToLeaf = (root, pre) => {
    if (!root) return [];
    const val = (pre << 1) + root.val;
    if (!root.left && !root.right) return [val];
    const left = sumEachRootToLeaf(root.left, val);
    const right = sumEachRootToLeaf(root.right, val);
    return [...left, ...right];
  };
  return sumEachRootToLeaf(root).reduce((sum, num) => sum + num);
};
