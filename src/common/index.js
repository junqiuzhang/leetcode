"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
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
    if (arr.length == 0 || arr.length == 1 && typeof arr[0] != 'number') {
        return null;
    }
    const listNode = new ListNode();
    let node = listNode;
    for (let i = 0; i < arr.length; i++) {
        node.next = new ListNode(arr[i]);
        node = node.next;
    }
    return listNode.next;
}
exports.array2list = array2list;
// 数组转二叉树
function array2tree(arr) {
    if (arr.length == 0 || arr.length == 1 && typeof arr[0] != 'number') {
        return null;
    }
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
        left = [...left, ...arr.slice(len - 1, len * 3 / 2 - 1)];
        right = [...right, ...arr.slice(len * 3 / 2 - 1, len * 2 - 1)];
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
        }
        else {
            right.push(ele);
        }
    }
    const sortedLeft = quickSort(left, compare);
    const sortedRight = quickSort(right, compare);
    return [...sortedLeft, middle, ...sortedRight];
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
        while (leftChildIndex < this.heap.length) {
            tempIndex = leftChildIndex;
            if (rightChildIndex < this.heap.length && !this.compare(this.heap[leftChildIndex], this.heap[rightChildIndex])) {
                tempIndex = rightChildIndex;
            }
            if (this.compare(this.heap[tempIndex], this.heap[fatherIndex])) {
                this.swap(tempIndex, fatherIndex);
                fatherIndex = tempIndex;
                leftChildIndex = fatherIndex * 2;
                rightChildIndex = fatherIndex * 2 + 1;
            }
            else {
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
            }
            else {
                break;
            }
        }
    }
    push(ele) {
        this.heap = [...this.heap, ele];
        this.shiftUp();
    }
    pop() {
        const head = this.heap[0];
        this.swap(0, this.heap.length);
        this.heap = this.heap.slice(0, this.heap.length - 1);
        this.shiftDown();
        return head;
    }
}
exports.Heap = Heap;
class UnionFind {
    constructor(param) {
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
        if (elRoot1 === elRoot2)
            return;
        this.elsTree.set(elRoot1, elRoot2);
        this.size--;
    }
}
exports.UnionFind = UnionFind;
