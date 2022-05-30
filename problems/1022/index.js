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
 * 9.58% 5.39%
 * @param {TreeNode} root
 * @return {number}
 */
export const sumRootToLeaf = (root) => {
  const sumEachRootToLeaf = (root) => {
    if (!root) return [];
    if (!root.left && !root.right) return [`${root.val}`];
    let left = [];
    if (root.left) {
      left = sumEachRootToLeaf(root.left).map((str) => `${root.val}${str}`);
    }
    let right = [];
    if (root.right) {
      right = sumEachRootToLeaf(root.right).map((str) => `${root.val}${str}`);
    }
    return [...left, ...right];
  };
  return sumEachRootToLeaf(root)
    .map((str) => parseInt(str, 2))
    .reduce((sum, num) => sum + num);
};
