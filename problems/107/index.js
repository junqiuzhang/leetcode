/**
 * 数据结构：二叉树
 * 算法：递归遍历
 */
/**
 * Definition for a binary tree node.
 * const TreeNode = (val) => {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number[][]}
 */
const levelOrderBottom = (root) => {
  if (!root) {
    return [];
  }
  let nums = [];
  const lob = (tree, nums, depth) => {
    if (!nums[depth] || typeof nums[depth].length !== 'number') {
      nums[depth] = [];
    }
    nums[depth].push(tree.val);
    if (tree.left) {
      lob(tree.left, nums, depth + 1);
    }
    if (tree.right) {
      lob(tree.right, nums, depth + 1);
    }
  };
  lob(root, nums, 0);
  return nums.reverse();
};
