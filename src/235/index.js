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
function lowestCommonAncestor(root, p, q) {
  if (!root || !p || !q) {
    return root;
  }
  var res = root;
  var pPosition = Math.sign(p.val - res.val);
  var qPosition = Math.sign(q.val - res.val);
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
}
