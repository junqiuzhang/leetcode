/**
 * 数据结构：二叉树
 * 算法：递归遍历
 */
/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @return {boolean}
 */
var isSymmetric = function(root) {
    function isSym(p, q) {
        if (!p || !q) {
            return p === q;
        }
        if (typeof p.val === 'number' && typeof q.val === 'number' && p.val !== q.val) {
            return false;
        }
        return isSym(p.left, q.right) && isSym(p.right, q.left);
    }
    if (!root) {
        return true;
    }
    if (!root.left || !root.right) {
        return root.left === root.right;
    }
    return isSym(root.left, root.right);
};