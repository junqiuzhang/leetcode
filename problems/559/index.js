/**
 * // Definition for a Node.
 * const Node = (val,children) => {
 *    this.val = val;
 *    this.children = children;
 * };
 */

/**
 * @param {Node|null} root
 * @return {number}
 */
const maxDepth = (root) => {
  if (!root) {
    return 0;
  }
  if (!root.children) {
    return 1;
  }
  let depth = 0;
  for (let i = 0; i < root.children.length; i++) {
    const child = root.children[i];
    const tempDepth = maxDepth(child);
    if (tempDepth > depth) {
      depth = tempDepth;
    }
  }
  return depth + 1;
};
