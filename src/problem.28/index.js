/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @param {number} sum
 * @return {boolean}
 */
var hasPathSum = function(root, sum) {
    if (!root || typeof root.val !== 'number') {
        return false;
    }
    function getPathSum(r) {
        if (!r.left && !r.right) {
            return [r.val];
        }
        var leftSum = [];
        if (r.left && typeof r.left.val === 'number') {
            leftSum = getPathSum(r.left);
        }
        var rightSum = [];
        if (r.right && typeof r.right.val === 'number') {
            rightSum = getPathSum(r.right);
        }
        var rootSum = [];
        for (var i = 0; i < leftSum.length; i++) {
            rootSum.push(leftSum[i] + r.val)
        }
        for (var j = 0; j < rightSum.length; j++) {
            rootSum.push(rightSum[j] + r.val)
        }
        return rootSum;
    }
    var rootSumArr = getPathSum(root);
    if (!rootSumArr.length) {
        return false;
    }
    for (var k = 0; k < rootSumArr.length; k++) {
        if (rootSumArr[k] === sum) {
            return true;
        }
    }
    return false;
};