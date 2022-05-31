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
  let res = root;
  let pPosition = Math.sign(p.val - res.val);
  let qPosition = Math.sign(q.val - res.val);
  while (pPosition == qPosition) {
    if (pPosition == -1) {
      res = res.left;
    } else if (pPosition == 1) {
      res = res.right;
    }
    pPosition = Math.sign(p.val - res.val);
    qPosition = Math.sign(q.val - res.val);
  }
  return res;
};
