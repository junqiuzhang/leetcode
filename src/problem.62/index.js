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
 * @return {string[]}
 */
var binaryTreePaths = function(root) {
    if (!root) {
        return [];
    }
    if (!root.left && !root.right) {
        return [root.val.toString()];
    }
    var res = [];
    var cur = root;
    var tempSum = [];
    var stack = [];
    var leftState = false;
    var rightState = false;
    do {
        leftState = cur.left && !cur.left.visit;
        rightState = cur.right && !cur.right.visit;
        if (!cur.visit) {
            cur.visit = true;
            tempSum.push(cur.val);
            stack.push(cur);
            if (leftState) {
                cur = cur.left;
            } else if (rightState) {
                cur = cur.right;
            }
        } else {
            if (leftState) {
                cur = cur.left;
            } else if (rightState) {
                cur = cur.right;
            } else {
                if (!cur.left && !cur.right) {
                    res.push(tempSum.join('->'));
                }
                tempSum.pop();
                stack.pop();
                cur = stack[stack.length - 1];
            }
        }

    } while (stack.length > 0 && cur)
    return res;
};
var a = [1,2,3,null,5]
var tree = array2tree(a)
console.log(binaryTreePaths(tree));
