// 链表元素
class ListNode<T> {
  constructor(val?: T, next?: ListNode<T>) {
    this.val = val;
    this.next = next ?? null;
  }
  val: any;
  next: ListNode<T> | null;
}
// 树元素
class TreeNode<T> {
  constructor(val?: T, left?: TreeNode<T>, right?: TreeNode<T>) {
    this.val = val;
    this.left = left ?? null;
    this.right = right ?? null;
  }
  val: any;
  left: TreeNode<T> | null;
  right: TreeNode<T> | null;
}
// 数组转链表
function array2list<T>(arr: T[]): ListNode<T> | null {
  if (arr.length == 0 || (arr.length == 1 && typeof arr[0] != "number")) {
    return null;
  }
  const list = new ListNode(arr[0]);
  list.next = array2list(arr.slice(1));
  return list;
}
function list2array<T>(list: ListNode<T> | null): T[] {
  if (!list) return [];
  const next = list2array(list?.next);
  return [list.val, ...next];
}
// 数组转二叉树
function array2tree<T>(arr: T[]): TreeNode<T> | null {
  if (arr.length == 0 || (arr.length == 1 && typeof arr[0] != "number")) {
    return null;
  }
  const tree = new TreeNode<T>();
  let left: T[] = [];
  let right: T[] = [];
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
function tree2array<T>(root: TreeNode<T> | null): T[] {
  if (!root) return [];
  const left = tree2array(root.left);
  const right = tree2array(root.right);
  return [...left, root.val, ...right];
}
// 二分查找
function quickFindIndex<T>(
  array: T[],
  predicate: (value?: T, index?: number, array?: T[]) => boolean
): number {
  let min = 0;
  let max = array.length - 1;
  let mid = Math.floor((min + max) / 2);
  if (predicate(array[min], min, array)) return 0;
  if (!predicate(array[max], max, array)) return -1;
  while (max - min > 1) {
    mid = Math.floor((min + max) / 2);
    if (predicate(array[mid], mid, array)) max = mid;
    else min = mid;
  }
  return max;
}
// 二分查找
function quickFind<T>(
  array: T[],
  predicate: (value?: T, index?: number, array?: T[]) => boolean
): T | null {
  const index = quickFindIndex(array, predicate);
  if (index === -1) return null;
  return array[index];
}
// 快排-递归实现
function quickSort<T>(arr: T[], compare: (a: T, b: T) => number): T[] {
  if (arr.length <= 1) {
    return arr;
  }
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
// 快排-非递归实现
function quickSort2<T>(arr: T[], compare: (i: number, j: number) => number) {
  if (arr.length <= 1) {
    return arr;
  }
  let left = 0;
  let right = arr.length - 1;
  let pivot = right;
  const stack = [left, right];
  while (stack.length > 0) {
    right = stack.pop() as number;
    left = stack.pop() as number;
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
class UnionFind<T> {
  constructor(param: number | T[]) {
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
  elsTree: Map<number | T, number | T>;
  size: number;
  find(el: T): T {
    if (this.elsTree.get(el) !== el) {
      this.elsTree.set(el, this.find(this.elsTree.get(el) as T));
    }
    return this.elsTree.get(el) as T;
  }
  same(el1: T, el2: T) {
    const elRoot1 = this.find(el1);
    const elRoot2 = this.find(el2);
    return elRoot1 === elRoot2;
  }
  union(el1: T, el2: T) {
    const elRoot1 = this.find(el1);
    const elRoot2 = this.find(el2);
    if (elRoot1 === elRoot2) return;
    this.elsTree.set(elRoot1, elRoot2);
    this.size--;
  }
}
// 排列组合A
function A(m: number, n: number): number {
  if (m > n) {
    throw new Error("m 不能大于 n");
  }
  if (m === 0) {
    return 1;
  }
  if (m === 1) {
    return n;
  }
  let num = 1;
  for (let i = 0; i < m; i++) {
    num = num * (n - i);
  }
  return num;
}
// 排列组合C
function C(m: number, n: number) {
  return A(m, n) / A(m, m);
}
export {
  ListNode,
  TreeNode,
  array2tree,
  array2list,
  tree2array,
  list2array,
  quickFindIndex,
  quickFind,
  quickSort,
  quickSort2,
  UnionFind,
  A,
  C,
};
