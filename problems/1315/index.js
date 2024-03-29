import { TreeNode } from '../../libs/common/index.js';
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
 * @return {number}
 */
const sumEvenGrandparent = (root) => {
  let sum = 0;
  const sumNode = (root, parent, grandParent) => {
    if (!root) return;
    if (!parent) return;
    if (!grandParent) return;
    if (grandParent.val % 2 === 0) {
      sum += root.val;
    }
    sumNode(root.left, root, parent);
    sumNode(root.right, root, parent);
  };
  sumNode(root, new TreeNode(1), new TreeNode(1));
  return sum;
};
