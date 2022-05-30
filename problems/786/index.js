const compare = (frac1, frac2) => {
  if (frac1.value > frac2.value) {
    return 1;
  }
  if (frac1.value < frac2.value) {
    return -1;
  }
  return 0;
}
class Fraction {
  constructor(m, n) {
    this.m = m;
    this.n = n;
    this.value = m / n;
  }
}
class MaxHeap {
  constructor(size, compare) {
    this.heap = [null];
    this.size = size + 1;
    this.compare = compare;
  }
  push(cur) {
    if (this.heap.length < this.size) {
      this.heap[this.heap.length] = cur;
      this.shiftUp();
      return;
    }
    if (this.compare(cur, this.heap[1]) < 0) {
      this.heap[1] = cur;
      this.shiftDown();
      return;
    }
  }
  pop() {
    const head = this.heap[1];
    const foot = this.heap[this.heap.length - 1];
    this.heap[1] = foot;
    this.heap.length--;
    this.shiftDown();
    return head;
  }
  shiftUp() {
    let i = this.heap.length - 1;
    let nextI = i;
    let cur;
    let parent;
    while (i > 1) {
      nextI = Math.floor(i / 2);
      cur = this.heap[i];
      parent = this.heap[nextI];
      if (typeof parent !== 'undefined' && this.compare(cur, parent) > 0) {
        this.heap[i] = parent;
        this.heap[nextI] = cur;
        i = nextI;
      } else {
        break;
      }
    }
  }
  shiftDown() {
    let i = 1;
    let nextI = i;
    let cur;
    let left;
    let right;
    let child;
    while (i < this.heap.length) {
      child = null;
      cur = this.heap[i];
      left = this.heap[i * 2];
      right = this.heap[i * 2 + 1];
      if (typeof left !== 'undefined') {
        child = left;
        nextI = i * 2;
      }
      if (typeof right !== 'undefined') {
        child = right;
        nextI = i * 2 + 1;
      }
      if (
        typeof left !== 'undefined' &&
        typeof right !== 'undefined' &&
        this.compare(left, right) > 0
      ) {
        child = left;
        nextI = i * 2;
      } else {
        child = right;
        nextI = i * 2 + 1;
      }
      if (child && this.compare(child, cur) > 0) {
        this.heap[i] = child;
        this.heap[nextI] = cur;
        i = nextI;
      } else {
        break;
      }
    }
  }
}
/**
 * @param {number[]} arr
 * @param {number} k
 * @return {number[]}
 */
const kthSmallestPrimeFraction = (arr, k) => {
  const maxHeap = new MaxHeap(k, compare);
  for (let i = 0; i < arr.length; i++) {
    const n1 = arr[i];
    for (let j = i + 1; j < arr.length; j++) {
      const n2 = arr[j];
      maxHeap.push(new Fraction(n1, n2));
    }
  }
  const kthSmallestFraction = maxHeap.pop();
  return [kthSmallestFraction.m, kthSmallestFraction.n];
}
