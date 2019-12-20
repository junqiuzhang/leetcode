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
var isBalanced = function(root) {
    if (!root) {
        return true;
    }
    function getDepth(r) {
        if (!r) {
            return 1;
        }
        var leftDepth = getDepth(r.left);
        if (!leftDepth) {
            return 0;
        }
        var rightDepth = getDepth(r.right);
        if (!rightDepth) {
            return 0;
        }
        if (Math.abs(leftDepth - rightDepth) > 1) {
            return 0;
        }
        return Math.max(leftDepth, rightDepth) + 1;
    }
    var rootDepth = getDepth(root);
    return !!rootDepth;
};