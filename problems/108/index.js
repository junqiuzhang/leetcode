import { TreeNode } from "../common/index.js";
/**
 * @param {number[]} nums
 * @return {TreeNode}
 */
export const sortedArrayToBST = (nums) => {
  if (!nums || !nums.length) {
    return null;
  }
  let i = Math.floor(nums.length / 2);
  let root = new TreeNode(nums[i]);
  root.left = sortedArrayToBST(nums.slice(0, i));
  root.right = sortedArrayToBST(nums.slice(i + 1, nums.length));
  return root;
};
