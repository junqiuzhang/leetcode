class Tree {
  constructor(val) {
    this.val = val;
    this.children = [];
  }
}
const insertTree = (rootTree, childTree) => {
  if (rootTree.val === childTree.val) return;
  const children = rootTree.children.filter(
    (child) => childTree.val % child.val === 0
  );
  if (children.length === 0) {
    rootTree.children.push(childTree);
  } else {
    children.forEach((child) => insertTree(child, childTree));
  }
};
const findTreeBranch = (rootTree) => {
  if (rootTree.children.length === 0) return [rootTree.val];
  const childrenDeepestSet = rootTree.children.map((child) =>
    findTreeBranch(child)
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
    const childTree = new Tree(num);
    insertTree(rootTree, childTree);
  }
  const rootTreeBranch = findTreeBranch(rootTree);
  return rootTreeBranch.slice(0, rootTreeBranch.length - 1);
};
