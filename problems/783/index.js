import { array2tree, tree2array } from '../../libs/common/index.js';
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
const minDiffInBST = (root) => {
  const array = tree2array(root);
  const diffArray = [];
  for (let i = 0; i < array.length - 1; i++) {
    diffArray.push(array[i + 1] - array[i]);
  }
  return Math.min(...diffArray);
};
