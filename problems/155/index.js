/**
 * initialize your data structure here.
 */
const MinStack = () => {
    this.stack = [];
    this.min = Infinity;
};

/** 
 * @param {number} x
 * @return {void}
 */
MinStack.prototype.push = function(x) {
    this.stack.push(x);
    if (typeof this.min !== 'number' || x < this.min) {
        this.min = x;
    }
};

/**
 * @return {void}
 */
MinStack.prototype.pop = function() {
    if (this.min == this.stack[this.stack.length - 1]) {
        this.stack.pop();
        this.min = Math.min(...this.stack);
    } else {
        this.stack.pop();
    }
};

/**
 * @return {number}
 */
MinStack.prototype.top = function() {
    return this.stack[this.stack.length - 1];
};

/**
 * @return {number}
 */
MinStack.prototype.getMin = function() {
    return this.min;
};

/** 
 * Your MinStack object will be instantiated and called as such:
 * var obj = new MinStack()
 * obj.push(x)
 * obj.pop()
 * var param_3 = obj.top()
 * var param_4 = obj.getMin()
 */