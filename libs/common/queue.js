/**
 * 队列
 */
export class Queue extends Array {
  constructor(...args) {
    super(...args);
  }
  first() {
    return this[0];
  }
  last() {
    return this[this.length - 1];
  }
  push(item) {
    this.push(item);
  }
  pop() {
    return this.splice(0, 1);
  }
}
