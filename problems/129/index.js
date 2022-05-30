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
const sumNumbers = (root) => {
  const getNumbers = (root, prefix) => {
    const curNumber = prefix + root.val;
    if (!root.left && !root.right) {
      return [curNumber];
    }
    let leftNumbers = [];
    if (root.left) {
      leftNumbers = getNumbers(root.left, curNumber);
    }
    let rightNumbers = [];
    if (root.right) {
      rightNumbers = getNumbers(root.right, curNumber);
    }
    return leftNumbers.concat(rightNumbers);
  }
  const nums = getNumbers(root, '');
  let sum = 0;
  for (let i = 0; i < nums.length; i++) {
    sum += Number(nums[i]);
  }
  return sum;
};