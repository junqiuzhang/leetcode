class Heap {
  constructor(compare) {
    this.heap = [];
    this.compare = compare;
  }
  swap(i, j) {
    let temp = this.heap[i];
    this.heap[i] = this.heap[j];
    this.heap[j] = temp;
  }
  shiftDown() {
    let fatherIndex = 0;
    let tempIndex = fatherIndex;
    let leftChildIndex = fatherIndex * 2;
    let rightChildIndex = fatherIndex * 2 + 1;
    while (leftChildIndex < this.heap.length || rightChildIndex < this.heap.length) {
      if (leftChildIndex >= this.heap.length) {
        tempIndex = rightChildIndex;
      } else if (rightChildIndex >= this.heap.length) {
        tempIndex = leftChildIndex;
      } else {
        if (this.compare(this.heap[leftChildIndex], this.heap[rightChildIndex])) {
          tempIndex = leftChildIndex;
        } else {
          tempIndex = rightChildIndex;
        }
      }
      if (this.compare(this.heap[tempIndex], this.heap[fatherIndex])) {
        this.swap(tempIndex, fatherIndex);
        fatherIndex = tempIndex;
        leftChildIndex = fatherIndex * 2;
        rightChildIndex = fatherIndex * 2 + 1;
      } else {
        break;
      }
    }
  }
  shiftUp() {
    let fatherIndex = 0;
    let childIndex = this.heap.length - 1;
    while (childIndex > 0) {
      fatherIndex = Math.floor(childIndex / 2);
      if (this.compare(this.heap[childIndex], this.heap[fatherIndex])) {
        this.swap(childIndex, fatherIndex);
        childIndex = fatherIndex;
      } else {
        break;
      }
    }
  }
  push(ele) {
    this.heap = this.heap.concat([ele]);
    this.shiftUp();
  }
  pop() {
    const head = this.heap[0];
    this.swap(0, this.heap.length);
    this.heap = this.heap.slice(0, this.heap.length - 1);
    this.shiftDown();
    return head;
  }
  get(i = 0) {
    return this.heap[i];
  }
  set(i = 0, ele) {
    this.heap[i] = ele;
    this.shiftDown();
  }
  toArray() {
    return [...this.heap];
  }
}
/**
 * @param {number[][]} points
 * @param {number} K
 * @return {number[][]}
 */
var kClosest = function (points, K) {
  const formattedPoints = [];
  function calcDistance(point) {
    return point[0] * point[0] + point[1] * point[1];
  }
  for (let i = 0; i < points.length; i++) {
    const point = points[i];
    const distance = calcDistance(point);
    formattedPoints.push({
      point,
      distance
    });
  }
  function compare(a, b) {
    return a.distance > b.distance;
  }
  const heap = new Heap(compare);
  for (let i = 0; i < K; i++) {
    heap.push(formattedPoints[i]);
  }
  for (let i = K; i < points.length; i++) {
    if (compare(heap.get(0), formattedPoints[i])) {
      heap.set(0, formattedPoints[i])
    }
  }
  const heapArray = heap.toArray();
  return heapArray.map(item => item.point);
};