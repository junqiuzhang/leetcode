class Tree {
  constructor(val) {
    this.val = val;
    this.children = [];
  }
}
const insertTree = (rootTree, treeNode) => {
  if (rootTree.val === treeNode.val) return;
  const children = rootTree.children.filter(
    (child) => treeNode.val % child.val === 0
  );
  if (children.length === 0) {
    rootTree.children.push(treeNode);
  } else {
    children.forEach((child) => insertTree(child, treeNode));
  }
};
const findDeepestTreePath = (rootTree) => {
  if (rootTree.children.length === 0) return [rootTree.val];
  const childrenDeepestSet = rootTree.children.map((child) =>
    findDeepestTreePath(child)
  );
  const deepestSet = childrenDeepestSet.reduce((pre, cur) =>
    cur.length > pre.length ? cur : pre
  );
  deepestSet.push(rootTree.val);
  return deepestSet;
};
/**
 * @param {number[]} nums
 * @return {number[]}
 */
export const largestDivisibleSubset = (nums) => {
  const sortedNums = nums.sort((a, b) => a - b);
  const rootTree = new Tree(-1);
  for (let i = 0; i < sortedNums.length; i++) {
    const num = sortedNums[i];
    const treeNode = new Tree(num);
    insertTree(rootTree, treeNode);
  }
  const rootTreeBranch = findDeepestTreePath(rootTree);
  return rootTreeBranch.slice(0, rootTreeBranch.length - 1);
};
