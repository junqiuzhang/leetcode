/**
 * Definition for a binary tree node.
 * const TreeNode = (val) => {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @param {number} sum
 * @return {boolean}
 */
export const hasPathSum = (root, sum) => {
  if (!root) {
    return false;
  }
  if (!root.left && !root.right) {
    return sum - root.val === 0;
  }
  if (hasPathSum(root.left, sum - root.val)) {
    return true;
  }
  if (hasPathSum(root.right, sum - root.val)) {
    return true;
  }
  return false;
};
