/**
 * initialize your data structure here.
 */
class MinStack {
  constructor() {
    this.stack = [];
    this.min = Infinity;
  }

  /**
   * @param {number} x
   * @return {void}
   */
  push(x) {
    this.stack.push(x);
    if (typeof this.min !== 'number' || x < this.min) {
      this.min = x;
    }
  }

  /**
   * @return {void}
   */
  pop() {
    if (this.min == this.stack[this.stack.length - 1]) {
      this.stack.pop();
      this.min = Math.min(...this.stack);
    } else {
      this.stack.pop();
    }
  }

  /**
   * @return {number}
   */
  top() {
    return this.stack[this.stack.length - 1];
  }

  /**
   * @return {number}
   */
  getMin() {
    return this.min;
  }
}

/**
 * Your MinStack object will be instantiated and called as such:
 * let obj = new MinStack()
 * obj.push(x)
 * obj.pop()
 * let param_3 = obj.top()
 * let param_4 = obj.getMin()
 */
