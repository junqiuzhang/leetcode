/**
 * 链表
 */
export class ListNode {
  /**
   * @param {any} val
   * @param {ListNode | null | undefined} next
   */
  constructor(val, next) {
    this.val = val;
    this.next = next;
  }
}
/**
 * 二叉树
 */
export class TreeNode {
  /**
   * @param {any} val
   * @param {TreeNode | null | undefined} left
   * @param {TreeNode | null | undefined} right
   */
  constructor(val, left, right) {
    this.val = val;
    this.left = left !== null && left !== void 0 ? left : null;
    this.right = right !== null && right !== void 0 ? right : null;
  }
}
/**
 * 数组转链表
 * @param {any[]} arr
 * @returns {ListNode}
 */
export function array2list(arr) {
  if (!(arr instanceof Array)) throw new Error("Type Error");
  if (arr.length === 0) return null;
  const list = new ListNode(arr[0]);
  list.next = array2list(arr.slice(1));
  return list;
}
/**
 * 链表转数组
 * @param {ListNode}
 * @returns {any[]}
 */
export function list2array(list) {
  if (!(list instanceof ListNode)) throw new Error("Type Error");
  const next = list2array(list.next);
  return [list.val, ...next];
}
/**
 * 数组转二叉树
 * @param {any[]} arr
 * @returns {TreeNode}
 */
export function array2tree(arr) {
  if (!(arr instanceof Array)) throw new Error("Type Error");
  if (arr.length === 0) return null;
  const tree = new TreeNode();
  let left = [];
  let right = [];
  let i = 0;
  let len = 0;
  let fir = -1;
  while (fir < arr.length) {
    i++;
    len = Math.pow(2, i);
    fir = len - 1;
    left = [...left, ...arr.slice(len - 1, (len * 3) / 2 - 1)];
    right = [...right, ...arr.slice((len * 3) / 2 - 1, len * 2 - 1)];
  }
  tree.val = arr[0];
  tree.left = array2tree(left);
  tree.right = array2tree(right);
  return tree;
}
/**
 * 二叉树转数组
 * @param {TreeNode} root
 * @returns {any[]}
 */
export function tree2array(root) {
  if (!(root instanceof TreeNode)) throw new Error("Type Error");
  const left = tree2array(root.left);
  const right = tree2array(root.right);
  return [...left, root.val, ...right];
}
/**
 * 二分查找索引
 * @param {any[]} arr
 * @param {(val: any, index: number, array: any[]) => boolean)} predicate
 * @returns {any[]}
 */
export function quickFindIndex(arr, predicate) {
  if (!(arr instanceof Array)) throw new Error("Type Error");
  let min = 0;
  let max = arr.length - 1;
  let mid = Math.floor((min + max) / 2);
  if (predicate(arr[min], min, arr)) return 0;
  if (!predicate(arr[max], max, arr)) return -1;
  while (max - min > 1) {
    mid = Math.floor((min + max) / 2);
    if (predicate(arr[mid], mid, arr)) max = mid;
    else min = mid;
  }
  return max;
}
/**
 * 二分查找值
 * @param {any[]} array
 * @param {(val: any, index: number, array: any[]) => boolean)} predicate
 * @returns {any[]}
 */
export function quickFind(array, predicate) {
  const index = quickFindIndex(array, predicate);
  if (index === -1) return null;
  return array[index];
}
/**
 * 快排-递归实现
 * @param {any[]} arr
 * @param {((val1: any, val2: any) => boolean)} compare
 * @returns {any[]}
 */
export function quickSort(arr, compare) {
  if (arr.length <= 1) return arr;
  const left = [];
  const right = [];
  const middle = arr[0];
  for (let i = 1; i < arr.length; i++) {
    const ele = arr[i];
    if (compare(ele, middle) <= 0) {
      left.push(ele);
    } else {
      right.push(ele);
    }
  }
  const sortedLeft = quickSort(left, compare);
  const sortedRight = quickSort(right, compare);
  return [...sortedLeft, middle, ...sortedRight];
}
/**
 * 快排-非递归实现
 * @param {any[]} arr
 * @param {((val1: any, val2: any) => boolean)} compare
 * @returns {any[]}
 */
export function quickSort2(arr, compare) {
  if (arr.length <= 1) return arr;
  let left = 0;
  let right = arr.length - 1;
  let pivot = right;
  const stack = [left, right];
  while (stack.length > 0) {
    right = stack.pop();
    left = stack.pop();
    if (left >= right) continue;
    pivot = right;
    let i = left;
    for (let j = left; j <= right; j++) {
      if (compare(j, pivot) <= 0) {
        [arr[i], arr[j]] = [arr[j], arr[i]];
        i++;
      }
    }
    stack.push(left, i - 2, i, right);
  }
  return arr;
}
/**
 * 并查集
 */
export class UnionFind {
  constructor(param) {
    this.elsTree = new Map();
    this.size = 0;
    if (typeof param === "number" && Number.isInteger(param)) {
      new Array(param).fill(0).forEach((v, i) => {
        this.elsTree.set(i, i);
      });
      this.size = param;
    }
    if (typeof param === "object" && Array.isArray(param)) {
      param.forEach((v, i) => {
        this.elsTree.set(v, v);
      });
      this.size = param.length;
    }
  }
  find(el) {
    if (this.elsTree.get(el) !== el) {
      this.elsTree.set(el, this.find(this.elsTree.get(el)));
    }
    return this.elsTree.get(el);
  }
  same(el1, el2) {
    const elRoot1 = this.find(el1);
    const elRoot2 = this.find(el2);
    return elRoot1 === elRoot2;
  }
  union(el1, el2) {
    const elRoot1 = this.find(el1);
    const elRoot2 = this.find(el2);
    if (elRoot1 === elRoot2) return;
    this.elsTree.set(elRoot1, elRoot2);
    this.size--;
  }
}
/**
 * 排列组合A
 * @param {number} m
 * @param {number} n
 * @returns {number}
 */
export function A(m, n) {
  if (m > n) throw new Error("m 不能大于 n");
  if (m === 0) return 1;
  if (m === 1) return n;
  let num = 1;
  for (let i = 0; i < m; i++) {
    num = num * (n - i);
  }
  return num;
}
/**
 * 排列组合C
 * @param {number} m
 * @param {number} n
 * @returns {number}
 */
export function C(m, n) {
  return A(m, n) / A(m, m);
}
/**
 * 前序遍历
 * @param {TreeNode} root
 */
export function preOrderTraverse(root, traverse) {
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
}
/**
 * 中序遍历
 * @param {TreeNode} root
 */
export function inOrderTraverse(root, traverse) {
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
}
/**
 * 后序遍历
 * @param {TreeNode} root
 */
export function postOrderTraverse(root, traverse) {
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
}
