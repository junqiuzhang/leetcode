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
// 总路径和
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
// 部分路径和（循环），叶子节点两个子节点均为null，两个子节点使stack pop两次，使sum - val两次，有问题
// var pathSum = function(root, sum) {
//     var Stack = [];
//     var LoopStack = [];
//     var Sum = 0;
//     var LoopSum = 0;
//     var Cur = root;
//     var LoopCur = Cur;
//     var total = 0;
//     do {
//         LoopStack = [];
//         LoopSum = 0;
//         LoopCur = Cur;
//         do {
//             if (LoopCur) {
//                 LoopStack.push(LoopCur);
//                 LoopSum += LoopCur.val;
//                 LoopCur = LoopCur.left;
//             } else {
//                 LoopCur = LoopStack.pop();
//                 LoopSum -= LoopCur && LoopCur.val || 0;
//                 LoopCur = LoopCur && LoopCur.right;
//             }
//             if (LoopSum == sum) {
//                 total++;
//             }
//         } while (LoopCur || LoopStack.length > 0);
//         if (Cur) {
//             Stack.push(Cur);
//             Cur = Cur.left;
//         } else {
//             Cur = Stack.pop();
//             Cur = Cur.right;
//         }
//     } while (Cur || Stack.length > 0);
//     return total;
// };
// 部分路径和（递归）
var pathSum = function(root, sum) {
    var total = 0;
    function calcSum(r, n) {
        if (r) {
            if (r.val == n) {
                total++;
            }  
            if (r.left) {
                calcSum(r.left, n - r.val);
            }
            if (r.right) {
                calcSum(r.right, n - r.val);
            }
        }
    }
    function loopRoot(r) {
        if (r) {
            calcSum(r, sum);
            if (r.left) {
                loopRoot(r.left);
            }
            if (r.right) {
                loopRoot(r.right);
            }
        }
    }
    loopRoot(root);
    return total;
};

