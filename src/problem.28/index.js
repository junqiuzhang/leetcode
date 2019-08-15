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
        if (direction) {
            tempSum += cur.val;
            stack.push(cur);
            if (cur.left) {
                cur = cur.left;
            } else if (cur.right) {
                cur = cur.right;
            } else {
                if (tempSum === sum) {
                    return true;
                }
                direction = false;
            }
        } else {
            tempSum -= cur.val;
            stack.pop();
            cur = stack[stack.length - 1];
            if (cur && cur.right) {
                cur = cur.right;
                direction = true;
            }
        }
    } while (stack.length > 0)
    return false;
};
var a = [-2,null,-3]
var b = -2
console.log(hasPathSum(array2tree(a), b))