import { TreeNode } from '../utils/index.js';
/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root
 * @param {number} target
 * @return {TreeNode}
 */
function removeLeafNodes(root, target) {
  /**
   * @param {TreeNode} current
   * @param {TreeNode} parent
   */
  function remove(current, parent) {
    if (current.left) {
      remove(current.left, current);
    }
    if (current.right) {
      remove(current.right, current);
    }
    if (current.val === target && !current.left && !current.right) {
      if (parent.left === current) {
        parent.left = null;
      } else if (parent.right === current) {
        parent.right = null;
      }
    }
  }
  const parent = new TreeNode(0, root);
  remove(root, parent);
  return parent.left;
}
