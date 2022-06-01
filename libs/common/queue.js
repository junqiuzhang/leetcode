/**
 * 队列
 */
export class Queue {
  /**
   * @param {any[]} arr
   */
  constructor(arr = []) {
    this.val = arr;
  }
  first() {
    return this.val[0];
  }
  last() {
    return this.val[this.val.length - 1];
  }
  push(item) {
    this.val.push(item);
  }
  pop() {
    return this.val.splice(0, 1);
  }
}
