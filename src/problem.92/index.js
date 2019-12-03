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
 * @return {number}
 */
// 总路径
// var pathSum = function(root, sum) {
//     function calcSum(r) {
//         if (!r) {
//             return [];
//         }
//         if (!r.left && !r.right) {
//             return [r.val];
//         }
//         return calcSum(r.left).concat(calcSum(r.right)).map(s => s + r.val);
//     }
//     return calcSum(root).filter(s => s == sum).length;
// };
// 部分路径
var pathSum = function(root, sum) {
    function calcSum(r) {
        if (!r) {
            return [];
        }
        if (!r.left && !r.right) {
            return [r.val];
        }
        return calcSum(r.left).concat(calcSum(r.right)).map(s => s + r.val);
    }
    return calcSum(root).filter(s => s == sum).length;
};