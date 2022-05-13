import { tree2array, array2tree } from "../../src/common/index.js";
/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */

/**
 * Encodes a tree to a single string.
 *
 * @param {TreeNode} root
 * @return {string}
 */
function serialize(root) {
  if (!root) return "[]";
  return `[${tree2array(root)
    .map((n) => (n === null ? "null" : new String(n)))
    .join(",")}]`;
}

/**
 * Decodes your encoded data to tree.
 *
 * @param {string} data
 * @return {TreeNode}
 */
function deserialize(data) {
  if (data === "[]") return null;
  return array2tree(
    data
      .substring(1, data.length - 1)
      .split(",")
      .map((s) => (s === "null" ? null : new Number(s)))
  );
}

/**
 * Your functions will be called as such:
 * deserialize(serialize(root));
 */

export { serialize, deserialize };
