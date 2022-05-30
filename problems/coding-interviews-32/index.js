/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number[]}
 */
export const levelOrder = (root) => {
  if (!root) return [];
  const arr = [];
  let nodes = [root];
  while (nodes.length > 0) {
    let nextNodes = [];
    for (let i = 0; i < nodes.length; i++) {
      const node = nodes[i];
      arr.push(node.val);
      if (node.left) {
        nextNodes.push(node.left);
      }
      if (node.right) {
        nextNodes.push(node.right);
      }
    }
    nodes = nextNodes;
  }
  return arr;
};
