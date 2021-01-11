'use strict';
Object.defineProperty(exports, '__esModule', { value: true });
exports.UnionFind = exports.Heap = exports.quickSort = exports.array2list = exports.array2tree = exports.TreeNode = exports.ListNode = void 0;
// 链表元素
class ListNode {
  constructor(val) {
    this.val = val;
    this.next = null;
  }
}
exports.ListNode = ListNode;
// 树元素
class TreeNode {
  constructor(val) {
    this.val = val;
    this.left = this.right = null;
  }
}
exports.TreeNode = TreeNode;
// 数组转链表
function array2list(arr) {
  if (arr.length == 0 || (arr.length == 1 && typeof arr[0] != 'number')) {
    return null;
  }
  var listNode = new ListNode();
  var node = listNode;
  for (var i = 0; i < arr.length; i++) {
    node.next = new ListNode(arr[i]);
    node = node.next;
  }
  return listNode.next;
}
exports.array2list = array2list;
// 数组转二叉树
function array2tree(arr) {
  if (arr.length == 0 || (arr.length == 1 && typeof arr[0] != 'number')) {
    return null;
  }
  var tree = new TreeNode();
  var left = [];
  var right = [];
  var i = 0;
  var len = 0;
  var fir = -1;
  while (fir < arr.length) {
    i++;
    len = Math.pow(2, i);
    fir = len - 1;
    left = left.concat(arr.slice(len - 1, (len * 3) / 2 - 1));
    right = right.concat(arr.slice((len * 3) / 2 - 1, len * 2 - 1));
  }
  tree.val = arr[0];
  tree.left = array2tree(left);
  tree.right = array2tree(right);
  return tree;
}
exports.array2tree = array2tree;
// 快排
function quickSort(arr, compare) {
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
exports.quickSort = quickSort;
class Heap {
  constructor(compare) {
    this.heap = [];
    this.compare = compare;
  }
  swap(i, j) {
    let temp = this.heap[i];
    this.heap[i] = this.heap[j];
    this.heap[j] = temp;
  }
  shiftDown() {
    let fatherIndex = 0;
    let tempIndex = fatherIndex;
    let leftChildIndex = fatherIndex * 2;
    let rightChildIndex = fatherIndex * 2 + 1;
    while (
      leftChildIndex < this.heap.length ||
      rightChildIndex < this.heap.length
    ) {
      if (leftChildIndex >= this.heap.length) {
        tempIndex = rightChildIndex;
      } else if (rightChildIndex >= this.heap.length) {
        tempIndex = leftChildIndex;
      } else {
        if (
          this.compare(this.heap[leftChildIndex], this.heap[rightChildIndex])
        ) {
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
  push(ele) {
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
  set(i = 0, ele) {
    this.heap[i] = ele;
    this.shiftDown();
  }
  toArray() {
    return [...this.heap];
  }
}
exports.Heap = Heap;
class UnionFind {
  constructor(els) {
    this.find = el => {
      let elRoot = el;
      while (elRoot !== this.elsTree.get(elRoot)) {
        elRoot = this.elsTree.get(elRoot);
      }
      return elRoot;
    };
    this.same = (el1, el2) => {
      const elRoot1 = this.find(el1);
      const elRoot2 = this.find(el2);
      return elRoot1 === elRoot2;
    };
    this.union = (el1, el2) => {
      const elRoot1 = this.find(el1);
      const elRoot2 = this.find(el2);
      if (elRoot1 === elRoot2) return;
      this.elsTree.set(elRoot1, elRoot2);
      this.size--;
    };
    this.forEach = cb => {
      if (this.elsList.size !== this.size) {
        const elsList = new Map();
        this.elsTree.forEach((val, key) => {
          let elSet = elsList.get(key);
          if (!elSet) elSet = [];
          elSet.push(val);
          elsList.set(this.find(key), elSet);
        });
        this.elsList = elsList;
      }
      this.elsList.forEach(val => {
        cb(val);
      });
    };
    this.elsTree = new Map();
    this.elsList = new Map();
    els.forEach(el => {
      this.elsTree.set(el, el);
      this.elsList.set(el, []);
    });
    this.size = els.length;
  }
}
exports.UnionFind = UnionFind;
