/**
 * Initialize your data structure here.
 */
class MyQueue {
  constructor() {
    this.stack = [];
  }

  /**
   * Push element x to the back of queue.
   * @param {number} x
   * @return {void}
   */
  push(x) {
    this.stack.push(x);
  }

  /**
   * Removes the element from in front of queue and returns that element.
   * @return {number}
   */
  pop() {
    return this.stack.splice(0, 1);
  }

  /**
   * Get the front element.
   * @return {number}
   */
  peek() {
    return this.stack[0];
  }

  /**
   * Returns whether the queue is empty.
   * @return {boolean}
   */
  empty() {
    return this.stack.length == 0;
  }
}

/**
 * Your MyQueue object will be instantiated and called as such:
 * let obj = new MyQueue()
 * obj.push(x)
 * let param_2 = obj.pop()
 * let param_3 = obj.peek()
 * let param_4 = obj.empty()
 */
