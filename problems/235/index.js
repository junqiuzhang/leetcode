/**
 * Definition for a binary tree node.
 * const TreeNode = (val) => {
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
const lowestCommonAncestor = (root, p, q) => {
  if (!root || !p || !q) {
    return root;
  }
  let ans = root;
  let pPosition = Math.sign(p.val - ans.val);
  let qPosition = Math.sign(q.val - ans.val);
  while (pPosition == qPosition) {
    if (pPosition == -1) {
      ans = ans.left;
    } else if (pPosition == 1) {
      ans = ans.right;
    }
    pPosition = Math.sign(p.val - ans.val);
    qPosition = Math.sign(q.val - ans.val);
  }
  return ans;
};
