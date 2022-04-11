/**
 * 标签：堆
 */
class KthHeap {
  constructor({ k, items, compare }) {
    this.heap = [];
    this.k = k;
    this.symbol = Symbol();
    this.compare = (a, b) => {
      if (a === this.symbol) {
        return false;
      } else if (b === this.symbol) {
        return true;
      }
      return compare(a, b);
    };
    if (Array.isArray(items)) {
      for (let i = 0; i < items.length; i++) {
        this.push(items[i]);
      }
    }
  }
  push(val) {
    if (this.heap.length < this.k) {
      this.heap.push(val);
      this.up();
    } else if (this.compare(val, this.heap[0])) {
      this.heap[0] = val;
      this.down();
    }
    return this.heap[0];
  }
  pop() {
    const temp = this.heap[0];
    this.heap[0] = this.symbol;
    this.down();
    return temp;
  }
  up() {
    let cur = this.heap.length - 1;
    let father;
    let lChild;
    let rChild;
    let min;
    if (cur < 1) return;
    do {
      if (cur % 2) {
        father = (cur - 1) / 2;
        lChild = cur;
        rChild = cur + 1;
      } else {
        father = (cur - 2) / 2;
        lChild = cur - 1;
        rChild = cur;
      }
      min = this.swap(father, lChild, rChild);
      if (min !== father) {
        cur = father;
      } else {
        break;
      }
    } while (cur > -1 && cur < this.heap.length);
  }
  down() {
    let cur = 0;
    let father;
    let lChild;
    let rChild;
    let min;
    do {
      father = cur;
      lChild = cur * 2 + 1;
      rChild = cur * 2 + 2;
      min = this.swap(father, lChild, rChild);
      if (min !== father) {
        cur = min;
      } else {
        break;
      }
    } while (cur > -1 && cur < this.heap.length);
  }
  swap(father, lChild, rChild) {
    let min = father;
    if (
      lChild > -1 &&
      lChild < this.heap.length &&
      this.compare(this.heap[lChild], this.heap[min])
    ) {
      min = lChild;
    }
    if (
      rChild > -1 &&
      rChild < this.heap.length &&
      this.compare(this.heap[rChild], this.heap[min])
    ) {
      min = rChild;
    }
    const temp = this.heap[min];
    this.heap[min] = this.heap[father];
    this.heap[father] = temp;
    return min;
  }
}

function KthLargest(k, nums) {
  kHp = new KthHeap({ k, items: nums, compare: (a, b) => a > b });
  kHp.add = kHp.push;
  return kHp;
}

function KthSmallest(k, nums) {
  const kHp = new KthHeap({ k, items: nums, compare: (a, b) => a < b });
  kHp.add = kHp.push;
  return this;
}

/**
 * Your KthLargest object will be instantiated and called as such:
 * var obj = new KthLargest(k, nums)
 * var param_1 = obj.push(val)
 */

export default KthHeap;
