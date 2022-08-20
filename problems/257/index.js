/**
 * Definition for a binary tree node.
 * const TreeNode = (val) => {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @return {string[]}
 */
export const binaryTreePaths = (root) => {
  if (!root) {
    return [];
  }
  if (!root.left && !root.right) {
    return [root.val.toString()];
  }
  const ans = [];
  const binaryTreePathsRecursion = (root, path) => {
    if (!root) {
      return;
    }
    if (!root.left && !root.right) {
      ans.push(path);
      return;
    }
    if (root.left) {
      binaryTreePathsRecursion(root.left, `${path}->${root.left.val}`);
    }
    if (root.right) {
      binaryTreePathsRecursion(root.right, `${path}->${root.right.val}`);
    }
  };
  binaryTreePathsRecursion(root, root.val);
  return ans;
};
