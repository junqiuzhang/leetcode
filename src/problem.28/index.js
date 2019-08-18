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
    if (!root) {
        return false;
    }
    if (!root.left && !root.right) {
        return root.val == sum;
    }
    var cur = root;
    var direction = true;
    var tempSum = 0;
    var stack = [];
    do {
        if (!cur.left && !cur.right) {
            if (tempSum === sum) {
                return true;
            }
        }
        if (direction) {
            tempSum += cur.val;
            stack.push(cur);
            cur.visit = true;
            if (cur && cur.left && !cur.left.visit) {
                cur = cur.left;
            } else {
                direction = false;
            }
        } else {
            tempSum -= cur.val;
            stack.pop();
            cur = stack[stack.length - 1];
            if (cur && cur.right && !cur.right.visit) {
                cur = cur.right;
                direction = true;
            }
        }
    } while (stack.length > 0)
    return false;
};
var a = [1]
var b = 1
console.log(hasPathSum(array2tree(a), b))