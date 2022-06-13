/**
 * Definition for a binary tree node.
 * const TreeNode = (val) => {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @return {string[]}
 */
const binaryTreePaths = (root) => {
  if (!root) {
    return [];
  }
  if (!root.left && !root.right) {
    return [root.val.toString()];
  }
  let ans = [];
  let cur = root;
  let stack = [];
  let leftState = false;
  let rightState = false;
  do {
    leftState = cur.left && !cur.left.visit;
    rightState = cur.right && !cur.right.visit;
    if (!cur.visit) {
      cur.visit = true;
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
          ans.push(stack.map((s) => s.val).join('->'));
        }
        stack.pop();
        cur = stack[stack.length - 1];
      }
    }
  } while (stack.length > 0 && cur);
  return ans;
};
