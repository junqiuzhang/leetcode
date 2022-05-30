/**
 * Definition for a binary tree node.
 * const TreeNode = (val) => {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number}
 */
const countNodes = (root) => {
  if (!root) {
    return 0;
  }
  let h = 0;
  let t = root;
  while (t) {
    h++;
    t = t.left;
  }
  const getLeafNode = (root, height, index) => {
    let temp = root;
    for (let i = 0; i < height - 1; i++) {
      const isRight = index >> (height - i - 2) & 1;
      if (isRight) {
        temp = temp.right;
      } else {
        temp = temp.left;
      }
    }
    return temp;
  }
  let leftIndex = 0;
  let rightIndex = Math.pow(2, h - 1) - 1;
  let middleIndex = Math.floor((leftIndex + rightIndex) / 2);;
  while (true) {
    const temp = getLeafNode(root, h, middleIndex);
    if (temp) {
      leftIndex = middleIndex;
    } else {
      rightIndex = middleIndex;
    }
    middleIndex = Math.floor((leftIndex + rightIndex) / 2);
    if (rightIndex - leftIndex <= 1) {
      break;
    }
  }
  let leftNode = getLeafNode(root, h, leftIndex);
  let rightNode = getLeafNode(root, h, rightIndex);
  if (leftNode && rightNode) {
    middleIndex = rightIndex;
  }
  return Math.pow(2, h - 1) + middleIndex;
};