// 链表元素
class ListNode<T> {
  constructor(val?: T) {
    this.val = val;
    this.next = null;
  }
  val: any;
  next: ListNode<T> | null;
}
// 树元素
class TreeNode<T> {
  constructor(val?: T) {
    this.val = val;
    this.left = this.right = null;
  }
  val: any;
  left: TreeNode<T> | null;
  right: TreeNode<T> | null;
}
// 数组转链表
function array2list<T>(arr: T[]): ListNode<T> | null {
  if (arr.length == 0 || arr.length == 1 && typeof arr[0] != 'number') {
    return null;
  }
  var listNode = new ListNode<T>();
  var node = listNode;
  for (var i = 0; i < arr.length; i++) {
    node.next = new ListNode(arr[i]);
    node = node.next;
  }
  return listNode.next;
}
// 数组转二叉树
function array2tree<T>(arr: T[]): TreeNode<T> | null {
  if (arr.length == 0 || arr.length == 1 && typeof arr[0] != 'number') {
    return null;
  }
  var tree = new TreeNode<T>();
  var left: T[] = [];
  var right: T[] = [];
  var i = 0;
  var len = 0;
  var fir = -1;
  while (fir < arr.length) {
    i++;
    len = Math.pow(2, i);
    fir = len - 1;
    left = left.concat(arr.slice(len - 1, len * 3/2 - 1));
    right = right.concat(arr.slice(len * 3/2 - 1, len * 2 - 1));
  }
  tree.val = arr[0];
  tree.left = array2tree(left);
  tree.right = array2tree(right);
  return tree;
}
// 快排
function quickSort<T>(arr: T[], compare: (a: T, b: T) => boolean): Array<T> {
  if (arr.length <= 1) {
    return arr;
  }
  const left = [];
  const right = [];
  const middle = arr[0];
  for (let i = 1; i < arr.length; i++) {
    const ele = arr[i];
    if (compare(ele, middle)) {
      left.push(ele);
    } else {
      right.push(ele);
    }
  }
  const sortedLeft = quickSort(left, compare);
  const sortedRight = quickSort(right, compare);
  return sortedLeft.concat([middle]).concat(sortedRight);
}
class Heap<T> {
  constructor(compare: (a: T, b: T) => boolean) {
    this.heap = [];
    this.compare = compare;
  }
  heap: T[];
  compare: (a: T, b: T) => boolean;
  swap(i: number, j: number) {
    let temp = this.heap[i];
    this.heap[i] = this.heap[j];
    this.heap[j] = temp;
  }
  shiftDown() {
    let fatherIndex = 0;
    let tempIndex = fatherIndex;
    let leftChildIndex = fatherIndex * 2;
    let rightChildIndex = fatherIndex * 2 + 1;
    while (leftChildIndex < this.heap.length || rightChildIndex < this.heap.length) {
      if (leftChildIndex >= this.heap.length) {
        tempIndex = rightChildIndex;
      } else if (rightChildIndex >= this.heap.length) {
        tempIndex = leftChildIndex;
      } else {
        if (this.compare(this.heap[leftChildIndex], this.heap[rightChildIndex])) {
          tempIndex = leftChildIndex;
        } else {
          tempIndex = rightChildIndex;
        }
      }
      if (this.compare(this.heap[tempIndex], this.heap[fatherIndex])) {
        this.swap(tempIndex, fatherIndex);
        fatherIndex = tempIndex;
        leftChildIndex = fatherIndex * 2;
        rightChildIndex = fatherIndex * 2 + 1;
      } else {
        break;
      }
    }
  }
  shiftUp() {
    let fatherIndex = 0;
    let childIndex = this.heap.length - 1;
    while (childIndex > 0) {
      fatherIndex = Math.floor(childIndex / 2);
      if (this.compare(this.heap[childIndex], this.heap[fatherIndex])) {
        this.swap(childIndex, fatherIndex);
        childIndex = fatherIndex;
      } else {
        break;
      }
    }
  }
  push(ele: T) {
    this.heap = this.heap.concat([ele]);
    this.shiftUp();
  }
  pop() {
    const head = this.heap[0];
    this.swap(0, this.heap.length);
    this.heap = this.heap.slice(0, this.heap.length - 1);
    this.shiftDown();
    return head;
  }
  get(i = 0) {
    return this.heap[i];
  }
  set(i = 0, ele: T) {
    this.heap[i] = ele;
    this.shiftDown();
  }
  toArray() {
    return [...this.heap];
  }
}
class UnionFind<T> {
  constructor(param: number | T[]) {
    this.elsTree = new Map();
    this.size = 0;
    if (typeof param === 'number' && Number.isInteger(param)) {
      new Array(param).fill(0).forEach((v, i) => {
        this.elsTree.set(i, i);
      });
      this.size = param;
    }
    if (typeof param === 'object' && Array.isArray(param)) {
      param.forEach((v, i) => {
        this.elsTree.set(v, v);
      });
      this.size = param.length;
    }
  }
  elsTree: Map<number | T, number | T>;
  size: number;
  find = (el: T): T => {
    if (this.elsTree.get(el) !== el) {
      this.elsTree.set(el, this.find(this.elsTree.get(el) as T));
    }
    return this.elsTree.get(el) as T;
  }
  same = (el1: T, el2: T) => {
    const elRoot1 = this.find(el1);
    const elRoot2 = this.find(el2);
    return elRoot1 === elRoot2;
  }
  union = (el1: T, el2: T) => {
    const elRoot1 = this.find(el1);
    const elRoot2 = this.find(el2);
    if (elRoot1 === elRoot2) return;
    this.elsTree.set(elRoot1, elRoot2);
    this.size--;
  }
}
export {
  ListNode,
  TreeNode,
  array2tree,
  array2list,
  quickSort,
  Heap,
  UnionFind
}