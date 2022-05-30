/**
 * @param {TreeNode} root
 * @return {TreeNode}
 */
const transformIncreasingTree = (root) => {
  let [leftRoot, leftLeaf, rightRoot, rightLeaf] = [root, root, root, root];
  if (root.left) {
    [leftRoot, leftLeaf] = transformIncreasingTree(root.left);
    leftLeaf.right = root;
  }
  root.left = null;
  if (root.right) {
    [rightRoot, rightLeaf] = transformIncreasingTree(root.right);
    root.right = rightRoot;
  }
  rightLeaf.right = null;
  return [leftRoot, rightLeaf];
};
/**
 * Definition for a binary tree node.
 * const TreeNode = (val, left, right) => {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root
 * @return {TreeNode}
 */
const increasingBST = (root) => {
  const [increasingRoot] = transformIncreasingTree(root);
  return increasingRoot;
};
