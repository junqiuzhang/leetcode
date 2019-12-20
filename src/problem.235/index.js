/**
 * 数据结构：二叉树
 * 算法：循环遍历
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
 * @param {TreeNode} p
 * @param {TreeNode} q
 * @return {TreeNode}
 */
var lowestCommonAncestor = function(root, p, q) {
    if (!root || typeof root.val != 'number' || !p || typeof p.val != 'number' || !q || typeof q.val != 'number') {
        return root;
    }
    var res = root;
    var pDire = 0;
    var qDire = 0;
    var pVal = p.val;
    var qVal = q.val;
    while (pDire == qDire) {
        if (pVal < res.val) {
            pDire = -1;
        } else if (pVal > res.val) {
            pDire = 1;
        } else {
            pDire = 0;
        }
        if (qVal < res.val) {
            qDire = -1;
        } else if (qVal > res.val) {
            qDire = 1;
        } else {
            qDire = 0;
        }
        if (pDire == qDire) {
            if (pDire == -1) {
                res = res.left;
            } else if (pDire == 1) {
                res = res.right;
            }
        }
    }
    return res;
};