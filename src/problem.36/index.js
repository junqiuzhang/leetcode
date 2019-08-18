/**
 * initialize your data structure here.
 */
var MinStack = function() {
    this.stack = [];
    this.min = -1;
};

/** 
 * @param {number} x
 * @return {void}
 */
MinStack.prototype.push = function(x) {
    this.stack.push(x);
    if (typeof this.stack[this.min] !== 'number' || x < this.stack[this.min]) {
        this.min = this.stack.length - 1;
    }
};

/**
 * @return {void}
 */
MinStack.prototype.pop = function() {
    if (this.min == this.stack.length - 1) {
        this.stack.pop();
        this.min = this.stack.indexOf(Math.min(...this.stack));
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
    return this.stack[this.min];
};

/** 
 * Your MinStack object will be instantiated and called as such:
 * var obj = new MinStack()
 * obj.push(x)
 * obj.pop()
 * var param_3 = obj.top()
 * var param_4 = obj.getMin()
 */
var obj = new MinStack()
obj.push(-2)
obj.push(0)
obj.push(-3)
console.log(obj.getMin())
obj.pop()
console.log(obj.top())
console.log(obj.getMin())
console.log(obj)