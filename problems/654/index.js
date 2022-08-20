import { TreeNode } from '../../libs/common/index.js';
/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {number[]} nums
 * @return {TreeNode}
 */
export const constructMaximumBinaryTree = (nums) => {
  if (nums.length === 0) {
    return null;
  }
  let max = -1;
  let maxIndex = -1;
  for (let i = 0; i < nums.length; i++) {
    const num = nums[i];
    if (num > max) {
      max = num;
      maxIndex = i;
    }
  }
  const left = nums.slice(0, maxIndex);
  const right = nums.slice(maxIndex + 1);
  return new TreeNode(
    max,
    constructMaximumBinaryTree(left),
    constructMaximumBinaryTree(right)
  );
};
