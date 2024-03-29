/**
 * @param {TreeNode} root
 * @returns {any[]}
 */
export const binaryTree2sortArray = (root) => {
  if (!root) return [];
  const left = binaryTree2sortArray(root.left);
  const right = binaryTree2sortArray(root.right);
  return [...left, root.val, ...right];
};
/**
 * @param {TreeNode} root1
 * @param {TreeNode} root2
 * @return {number[]}
 */
export const getAllElements = (root1, root2) => {
  const arr1 = binaryTree2sortArray(root1);
  const arr2 = binaryTree2sortArray(root2);
  const len1 = arr1.length;
  const len2 = arr2.length;
  let ans = [];
  let i = 0;
  let j = 0;
  while (i < len1 || j < len2) {
    if (arr1[i] < arr2[j] || j >= len2) {
      ans.push(arr1[i]);
      i++;
    } else {
      ans.push(arr2[j]);
      j++;
    }
  }
  return ans;
};
