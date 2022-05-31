/**
 * 数据结构：数组 平衡二叉树
 * 算法：递归
 */
/**
 * Definition for a binary tree node.
 * const TreeNode = (val) => {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {number[]} nums
 * @return {TreeNode}
 */
const sortedArrayToBST = (nums) => {
    if (!nums || !nums.length) {
        return null;
    }
    if (nums.length === 1) {
        return new TreeNode(nums[0]);
    }
    let i = Math.floor(nums.length/2);
    let root = new TreeNode(nums[i]);
    root.left = sortedArrayToBST(nums.slice(0, i));
    root.right = sortedArrayToBST(nums.slice(i + 1, nums.length));
    return root;
};