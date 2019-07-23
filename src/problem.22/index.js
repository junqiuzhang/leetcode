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
var isSymmetric = function(root) {
    function isSym(p, q) {
        if (!p || !q) {
            return p === q;
        }
        if (typeof p.val === 'number' && typeof q.val === 'number' && p.val !== q.val) {
            return false;
        }
        return isSym(p.left, q.right) && isSym(p.right, q.left);
    }
    if (!root || !root.val) {
        return true;
    }
    if (!root.left || !root.right) {
        return root.left === root.right;
    }
    return isSym(root.left, root.right);
};
var a = {
    val: 1,
    left: {
        val: 1,
        left: null,
        right: null
    },
    right: {
        val: 2,
        left: null,
        right: null
    }
}
var a = [0,-3,-3,-93,97,97,-93,-77,null,-96,null,-96,null,null,-77];
function array2tree(arr) {
    if (!arr) {
        return null;
    }
    var tree = {};
    tree.val = a[0];
    tree.left = array2tree(arr.slice(3, 3 + (arr.length - 3)/2));
    tree.right = array2tree(arr.slice(3 + (arr.length - 3)/2, arr.length));
    return tree;
}
console.log(array2tree(a))