/**
 * 栈
 */
export class Stack extends Array {
  constructor(...args) {
    super(...args);
  }
  first() {
    return this[0];
  }
  last() {
    return this[this.length - 1];
  }
}
