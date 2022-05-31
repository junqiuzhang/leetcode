/**
 * Definition for a binary tree node.
 * const TreeNode = (val) => {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number}
 */
// const maxDepth = (root) => {
//   if (!root) {
//     return 0;
//   }
//   return 1 + Math.max(maxDepth(root.left), maxDepth(root.right));
// }
/**
 * @param {TreeNode} root
 * @return {number}
 */
const maxDepth = (root) => {
  if (!root) {
    return 0;
  }
  let stack = [root];
  let depth = 0;
  while (stack.length > 0) {
    let tmpStack = [];
    for (let i = 0; i < stack.length; i++) {
      let cur = stack[i];
      if (cur.left) {
        tmpStack.push(cur.left);
      }
      if (cur.right) {
        tmpStack.push(cur.right);
      }
    }
    stack = tmpStack;
    depth++;
  }
  return depth;
};
