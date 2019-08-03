const {array2tree} = require('../common')
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
    var cur = root;
    var tempSum = 0;
    var stack = [];
    while (cur) {
        if (!cur.visited) {
            tempSum += cur.val;
            cur.visited = true;
            stack.push(cur);
        }
        console.log(tempSum,cur)
        if (!cur.left && !cur.right) {
            if (tempSum === sum) {
                return true;
            }
            tempSum -= cur.val;
            stack.pop();
            cur = stack[stack.length - 1];
        } else if (cur.left && !cur.left.visited) {
            cur = cur.left;
        } else if (cur.right && !cur.right.visited) {
            cur = cur.right;
        } else {
            tempSum -= cur.val;
            cur = stack.pop();
        }
    }
    return false;
};
var a = [1,-2,-3,1,3,-2,null,-1]
var b = -4
console.log(hasPathSum(array2tree(a), b))