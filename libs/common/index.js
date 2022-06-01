export const isNull = (value) => value === null;
export const isUndefined = (value) => value === undefined;
export const isBoolean = (value) =>
  typeof value === "boolean" || value instanceof Boolean;
export const isString = (value) =>
  typeof value === "string" || value instanceof String;
export const isNumber = (value) =>
  typeof value === "number" || value instanceof Number;
export const isFunction = (value) =>
  typeof value === "function" || value instanceof Function;
export const isArray = (value) => Array.isArray(value);
export const isObject = (value) =>
  typeof value === "object" &&
  !isNull(value) &&
  !isUndefined(value) &&
  !isBoolean(value) &&
  !isString(value) &&
  !isNumber(value) &&
  !isFunction(value) &&
  !isArray(value);
export const isEmpty = (value) =>
  (isArray(value) && value.length === 0) ||
  (isObject(value) && Object.keys(value).length === 0);
export const toValue = (value) => {
  let val;
  try {
    val = value.valueOf();
  } catch (error) {
    val = value;
  }
  return val;
};
export const toString = (value) => {
  let str = "";
  try {
    str = JSON.stringify(value);
  } catch (error) {
    try {
      str = value.toString();
    } catch (error) {
      str = new String(value);
    }
  }
  return str;
};
export const isEqual = (value1, value2) => {
  if (toValue(value1) === toValue(value2)) {
    return true;
  }
  if (isArray(value1) && isArray(value2)) {
    const length = Math.max(value1.length, value2.length);
    const keys = new Array(length).fill(0);
    return keys.every((k, i) => isEqual(value1[i], value2[i]));
  }
  if (isObject(value1) && isObject(value2)) {
    const keys1 = Object.keys(value1);
    const keys2 = Object.keys(value2);
    const keys = new Array(...keys1, ...keys2);
    return keys.every((k, i) => isEqual(value1[k], value2[k]));
  }
  return false;
};
export const flow = (...funcs) => {
  return (arg) => {
    let res = arg;
    funcs.forEach((func) => {
      if (!isFunction(func)) {
        throw new Error("Error: arguments must be a function!");
      }
      res = func(res);
    });
    return res;
  };
};
/**
 * 链表
 */
export class ListNode {
  /**
   * @param {any} val
   * @param {ListNode | undefined} next
   */
  constructor(val = null, next = null) {
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
 * 数组转链表
 * @param {any[]} arr
 * @returns {ListNode}
 */
export const array2list = (arr) => {
  if (!isArray(arr)) throw new Error("Error: arguments must be an array!");
  if (isEmpty(arr)) return null;
  const list = new ListNode(arr[0]);
  let node = list;
  for (let i = 0; i < arr.length; i++) {
    const item = arr[i];
    const next = new ListNode(item);
    node.next = next;
    node = node.next;
  }
  return list;
};
/**
 * 链表转数组
 * @param {ListNode}
 * @returns {any[]}
 */
export const list2array = (list) => {
  if (!list) return [];
  const next = list2array(list.next);
  return [list.val, ...next];
};
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
 * 前序遍历
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
 * 中序遍历
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
 * 后序遍历
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
/**
 * 二分查找索引
 * @param {any[]} arr
 * @param {(val: any, index: number, array: any[]) => boolean)} predicate
 * @returns {number}
 */
export const quickFindIndex = (arr, predicate) => {
  if (!isArray(arr)) throw new Error("Error: arguments must be an array!");
  if (isEmpty(arr)) return -1;
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
};
/**
 * 二分查找值
 * @param {any[]} array
 * @param {(val: any, index: number, array: any[]) => boolean)} predicate
 * @returns {any}
 */
export const quickFind = (array, predicate) => {
  const index = quickFindIndex(array, predicate);
  if (index === -1) return null;
  return array[index];
};
/**
 * 快排-递归实现
 * @param {any[]} arr
 * @param {((val1: any, val2: any) => boolean)} compare
 * @returns {any[]}
 */
export const quickSort = (arr, compare) => {
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
};
/**
 * 快排-非递归实现
 * @param {any[]} arr
 * @param {((val1: any, val2: any) => boolean)} compare
 * @returns {any[]}
 */
export const quickSort2 = (arr, compare) => {
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
};
/**
 * 并查集
 */
export class UnionFind {
  constructor(param) {
    this.elsTree = new Map();
    this.size = 0;
    if (isInteger(param)) {
      new Array(param).fill(0).forEach((v, i) => {
        this.elsTree.set(i, i);
      });
      this.size = param;
    }
    if (isArray(param)) {
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
export const A = (m, n) => {
  if (m > n) throw new Error("Error: m must be smaller than n!");
  if (m === 0) return 1;
  if (m === 1) return n;
  let num = 1;
  for (let i = 0; i < m; i++) {
    num = num * (n - i);
  }
  return num;
};
/**
 * 排列组合C
 * @param {number} m
 * @param {number} n
 * @returns {number}
 */
export const C = (m, n) => {
  return A(m, n) / A(m, m);
};
