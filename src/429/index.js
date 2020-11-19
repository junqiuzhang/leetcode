/**
 * // Definition for a Node.
 * function Node(val,children) {
 *    this.val = val;
 *    this.children = children;
 * };
 */

/**
 * @param {Node} root
 * @return {number[][]}
 */
var levelOrder = function (root) {
  if (!root) {
    return [];
  }
  const allArray = [];
  let levelArray = [root];
  while (levelArray.length > 0) {
    allArray.push(levelArray.map(node => node.val));
    levelArray = levelArray.map(node => node.children).reduce((pre, cur) => pre.concat(cur), []);
  }
  return allArray;
};