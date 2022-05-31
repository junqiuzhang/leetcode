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
 * @param {TreeNode} p
 * @param {TreeNode} q
 * @return {boolean}
 */
const isSameTree = (p, q) => {
  if (!p || !q) {
    return p === q;
  }
  if (
    typeof p.val === "number" &&
    typeof q.val === "number" &&
    p.val !== q.val
  ) {
    return false;
  }
  return isSameTree(p.left, q.left) && isSameTree(p.right, q.right);
};
