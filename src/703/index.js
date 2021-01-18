/**
 * 标签：堆
 */
/**
 * @param {number} k
 * @param {number[]} nums
 */
var KthLargest = function(k, nums) {
  this.heap = []
  this.k = k
  for (let i = 0; i < nums.length; i++) {
    this.add(nums[i])
  }
};
/** 
 * @param {number} val
 * @return {number}
 */
KthLargest.prototype.add = function(val) {
  if (this.heap.length < this.k) {
    this.heap.push(val)
    this.up()
  } else if (this.heap[0] < val) {
    this.heap[0] = val
    this.down()
  }  
  return this.heap[0]
};
/** 
 * @param {}
 * @return {void}
 */
KthLargest.prototype.up = function() {
  let cur = this.heap.length - 1
  let father
  let lChild
  let rChild
  let min
  do {    
    if (cur % 2) {
      father = (cur - 1) / 2
      lChild = cur
      rChild = cur + 1
    } else {
      father = (cur - 2) / 2
      lChild = cur - 1
      rChild = cur
    }
    min = this.swapHeap(father, lChild, rChild)
    if (min !== father) {
      cur = father
    } else {
      break
    }
  } while (cur > -1 && cur < this.heap.length)
}
/** 
 * @param {}
 * @return {void}
 */
KthLargest.prototype.down = function() {
  let cur = 0
  let father
  let lChild
  let rChild
  let min
  do {
    father = cur
    lChild = cur * 2 + 1
    rChild = cur * 2 + 2
    min = this.swapHeap(father, lChild, rChild)
    if (min !== father) {
      cur = min
    } else {
      break
    }
  } while (cur > -1 && cur < this.heap.length)
}
/** 
 * @param {number} father
 * @param {number} lChild
 * @param {number} rChild
 * @return {number}
 */
KthLargest.prototype.swapHeap = function(father, lChild, rChild) {
  let min = father
  if (typeof this.heap[min] === 'number' && typeof this.heap[lChild] === 'number' && this.heap[min] > this.heap[lChild]) {
    min = lChild
  }
  if (typeof this.heap[min] === 'number' && typeof this.heap[rChild] === 'number' && this.heap[min] > this.heap[rChild]) {
    min = rChild
  }
  this.swap(min, father)
  return min
}
/** 
 * @param {number} i
 * @param {number} j
 * @return {void}
 */
KthLargest.prototype.swap = function(i, j) {
  const temp = this.heap[i]
  this.heap[i] = this.heap[j]
  this.heap[j] = temp
}
/**
 * Your KthLargest object will be instantiated and called as such:
 * var obj = new KthLargest(k, nums)
 * var param_1 = obj.add(val)
 */

