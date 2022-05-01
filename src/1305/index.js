import { tree2array } from "../common/index.js";
/**
 * @param {TreeNode} root1
 * @param {TreeNode} root2
 * @return {number[]}
 */
function getAllElements(root1, root2) {
  const arr1 = tree2array(root1);
  const arr2 = tree2array(root2);
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
}
export default getAllElements;
