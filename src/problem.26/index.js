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
    function isBalance(r) {
        if (!r) {
            return {
                isBalance: true,
                depth: 0,
            }
        }
        var leftBalance = isBalance(r.left);
        if (!leftBalance.isBalance) {
            return {
                isBalance: leftBalance.isBalance,
                depth: leftBalance.depth,
            }
        }
        var rightBalance = isBalance(r.right);
        if (!rightBalance.isBalance) {
            return {
                isBalance: rightBalance.isBalance,
                depth: rightBalance.depth,
            }
        }
        return {
            isBalance: Math.abs(leftBalance.depth - rightBalance.depth) <= 1,
            depth: Math.max(leftBalance.depth, rightBalance.depth) + 1,
        }
    }
    var rootBalance = isBalance(root);
    return rootBalance.isBalance;
};