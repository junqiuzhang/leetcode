const STATUS = {
  has: 2,
  covered: 1,
  need: 0,
};
/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number}
 */
function minCameraCover(root) {
  if (!root.left && !root.right) {
    return 1;
  }
  /**
   * @param {TreeNode} root
   * @return {number[]}
   */
  function minCamera(root) {
    if (!root) {
      return [0, STATUS.covered];
    }
    const [leftMin, leftStatus] = minCamera(root.left);
    const [rightMin, rightStatus] = minCamera(root.right);
    if (leftStatus === STATUS.need || rightStatus === STATUS.need) {
      return [leftMin + rightMin + 1, STATUS.has];
    }
    if (leftStatus === STATUS.has || rightStatus === STATUS.has) {
      return [leftMin + rightMin, STATUS.covered];
    }
    return [leftMin + rightMin, STATUS.need];
  }
  const [min, status] = minCamera(root);
  return status === STATUS.need ? min + 1 : min;
}
