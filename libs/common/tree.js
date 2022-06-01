/**
 * 二叉树
 */
export class TreeNode {
  /**
   * @param {any} val
   * @param {TreeNode | undefined} left
   * @param {TreeNode | undefined} right
   */
  constructor(val = null, left = null, right = null) {
    this.val = val;
    this.left = left;
    this.right = right;
  }
}
/**
 * 数组转二叉树
 * @param {any[]} arr
 * @returns {TreeNode}
 */
export const array2tree = (arr) => {
  if (!isArray(arr)) throw new Error("Error: arguments must be an array!");
  if (isEmpty(arr)) return null;
  const root = new TreeNode(arr[0]);
  const nodes = [root];
  for (let i = 1; i < arr.length; i++) {
    const item = arr[i];
    let next = null;
    if (!isNull(item) && !isUndefined(item)) {
      next = new TreeNode(item);
      if ((i & 1) === 1) {
        const node = nodes[(i - 1) / 2];
        node.left = next;
      } else {
        const node = nodes[(i - 2) / 2];
        node.right = next;
      }
    }
    nodes[i] = next;
  }
  return root;
};

/**
 * 二叉树转数组
 * @param {TreeNode} root
 * @returns {any[]}
 */
export const tree2array = (root) => {
  if (!root) return [];
  const arr = [];
  const nodes = [root];
  let index = 1;
  while (nodes.length > index - 1) {
    for (let i = index - 1; i < nodes.length; i++) {
      const node = nodes[i];
      let next = null;
      if (!isNull(node) && !isUndefined(node)) {
        next = node.val;
        if (node.left) {
          nodes[(i + 1) * 2 - 1] = node.left;
        }
        if (node.right) {
          nodes[(i + 1) * 2] = node.right;
        }
      }
      arr[i] = next;
    }
    index = index * 2;
  }
  return arr;
};
/**
 * 二叉树前序遍历
 * @param {TreeNode} root
 * @param {(val: any) => boolean)} traverse
 */
export const preOrderTraverse = (root, traverse) => {
  const stack = [];
  let cur = root;
  let tmp = root;
  while (cur || stack.length > 0) {
    while (cur) {
      traverse(cur.val);
      stack.push(cur);
      cur = cur.left;
    }
    tmp = stack.pop();
    cur = tmp.right;
  }
};
/**
 * 二叉树中序遍历
 * @param {TreeNode} root
 * @param {(val: any) => boolean)} traverse
 */
export const inOrderTraverse = (root, traverse) => {
  const stack = [];
  let cur = root;
  let tmp = root;
  while (cur || stack.length > 0) {
    while (cur) {
      stack.push(cur);
      cur = cur.left;
    }
    tmp = stack.pop();
    traverse(tmp.val);
    cur = tmp.right;
  }
};
/**
 * 二叉树后序遍历
 * @param {TreeNode} root
 * @param {(val: any) => boolean)} traverse
 */
export const postOrderTraverse = (root, traverse) => {
  const stack = [];
  const res = [];
  let cur = root;
  let tmp = root;
  while (cur || stack.length > 0) {
    while (cur) {
      res.push(cur);
      stack.push(cur);
      cur = cur.right;
    }
    tmp = stack.pop();
    cur = tmp.left;
  }
  res.reverse().forEach((tmp) => traverse(tmp.val));
};
