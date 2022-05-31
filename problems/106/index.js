import { TreeNode } from "../common/index.js";
/**
 * Definition for a binary tree node.
 * const TreeNode = (val, left, right) => {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {number[]} inorder
 * @param {number[]} postorder
 * @return {TreeNode}
 */
const buildTree = (inorder, postorder) => {
  if (inorder.length === 0 || postorder.length === 0) {
    return null;
  }
  const rootVal = postorder[postorder.length - 1];
  const root = new TreeNode(rootVal);
  const rootIndex = inorder.indexOf(rootVal);
  const leftInorder = inorder.slice(0, rootIndex);
  const rightInorder = inorder.slice(rootIndex + 1);
  const leftPostorder = postorder.slice(0, rootIndex);
  const rightPostorder = postorder.slice(rootIndex, postorder.length - 1);
  root.left = buildTree(leftInorder, leftPostorder);
  root.right = buildTree(rightInorder, rightPostorder);
  return root;
};
