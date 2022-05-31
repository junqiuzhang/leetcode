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
 * @return {number}
 */
const minDepth = (root) => {
  if (!root) {
    return 0;
  }
  if (!root.left && !root.right) {
    return 1;
  }
  const getMinDepth = (r) => {
    if (!r.left && !r.right) {
      return 1;
    }
    let leftDepth = Infinity;
    if (r.left && typeof r.left.val === "number") {
      leftDepth = getMinDepth(r.left);
    }
    let rightDepth = Infinity;
    if (r.right && typeof r.right.val === "number") {
      rightDepth = getMinDepth(r.right);
    }
    return Math.min(leftDepth, rightDepth) + 1;
  };
  let rootDepth = getMinDepth(root);
  return rootDepth;
};
