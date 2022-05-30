/**
 * 数据结构：二叉树
 * 算法：循环遍历
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
 * @param {number} sum
 * @return {boolean}
 */
const hasPathSum = (root, sum) => {
    if (!root) {
        return false;
    }
    if (!root.left && !root.right) {
        return root.val == sum;
    }
    var cur = root;
    var tempSum = 0;
    var stack = [];
    var leftState = false;
    var rightState = false;
    do {
        leftState = cur.left && !cur.left.visit;
        rightState = cur.right && !cur.right.visit;
        if (!cur.visit) {
            cur.visit = true;
            tempSum += cur.val;
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
                    if (tempSum == sum) {
                        return true;
                    }
                }
                tempSum -= cur.val;
                stack.pop();
                cur = stack[stack.length - 1];
            }
        }

    } while (stack.length > 0 && cur)
    return false;
};