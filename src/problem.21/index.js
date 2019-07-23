/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} p
 * @param {TreeNode} q
 * @return {boolean}
 */
var isSameTree = function(p, q) {
    if (!p || !q) {
        return p === q;
    }
    if (typeof p.val === 'number' && typeof q.val === 'number' && p.val !== q.val) {
        return false;
    }
    if (!isSameTree(p.left, q.left) || !isSameTree(p.right, q.right)) {
        return false;
    }
    return true;
};