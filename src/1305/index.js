/**
 * @typedef Tree
 * @type {object}
 * @property {number} val
 * @property {Tree} left
 * @property {Tree} right
 *
 * @param {Tree} root
 * @returns {number[]}
 */
function binarySearchTree2sortArray(root) {
  if (!root) {
    return [];
  }
  if (!root.left && !root.right) {
    return [root.val];
  }
  const left = binarySearchTree2sortArray(root.left);
  const right = binarySearchTree2sortArray(root.right);
  return [...left, root.val, ...right];
}
/**
 * @param {TreeNode} root1
 * @param {TreeNode} root2
 * @return {number[]}
 */
function getAllElements(root1, root2) {
  let ans = [];
  const array1 = binarySearchTree2sortArray(root1);
  const array2 = binarySearchTree2sortArray(root2);
  let i = 0;
  let j = 0;
  while (i < array1.length && j < array2.length) {
    if (array1[i] < array2[j]) {
      ans.push(array1[i]);
      i++;
    } else {
      ans.push(array2[j]);
      j++;
    }
  }
  if (i < array1.length) {
    ans = [...ans, ...array1.slice(i)];
  } else if (j < array2.length) {
    ans = [...ans, ...array2.slice(j)];
  }
  return ans;
}
export { binarySearchTree2sortArray, getAllElements as default };
