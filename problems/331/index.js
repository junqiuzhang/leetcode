/**
 * @param {string} preorder
 * @return {boolean}
 */
export const isValidSerialization = (preorder) => {
  // 因为 叶子节点数 = 非叶子节点数 + 1
  // 所以 对于任意中间时刻，遍历过的叶子节点数 < 遍历过的非叶子节点数 + 1
  let tree = preorder.split(',');
  if (tree === '#') return true;
  let leafCount = 0;
  let unLeafCount = 0;
  for (let i = 0; i < tree.length; i++) {
    if (leafCount >= unLeafCount + 1) {
      return false;
    }
    const node = tree[i];
    if (node === '#') {
      leafCount++;
    } else {
      unLeafCount++;
    }
  }
  if (leafCount !== unLeafCount + 1) {
    return false;
  }
  return true;
};
