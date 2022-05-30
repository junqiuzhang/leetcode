class UnionFind {
  constructor(size) {
    this.arr = new Array(size).fill(0).map((o, i) => i);
    this.size = size;
  }
  get(i) {
    if (this.arr[i] === i) {
      return i;
    }
    return this.get(this.arr[i]);
  }
  union(i, j) {
    const iId = this.get(i);
    const jId = this.get(j);
    if (iId === jId) {
      return;
    }
    this.arr[jId] = iId;
    this.size--;
  }
}
const landNumber = (matrix) => {
  const m = matrix.length;
  const n = matrix[0].length;
  const getMatrix = (i, j) => {
    if (i < 0 || i >= m || j < 0 || j >= n) {
      return '0';
    }
    return matrix[i][j];
  }
  let len = 0;
  for (let i = 0; i < matrix.length; i++) {
    for (let j = 0; j < matrix[i].length; j++) {
      if (matrix[i][j] === '1') {
        len++;
        matrix[i][j] = len;
      }
    }
  }
  const uf = new UnionFind(len);
  for (let i = 0; i < matrix.length; i++) {
    for (let j = 0; j < matrix[i].length; j++) {
      if (matrix[i][j] !== '0') {
        if (getMatrix(i - 1, j) !== '0') {
          uf.union(matrix[i][j], matrix[i - 1][j]);
        }
        if (getMatrix(i, j - 1) !== '0') {
          uf.union(matrix[i][j], matrix[i][j - 1]);
        }
        if (getMatrix(i + 1, j) !== '0') {
          uf.union(matrix[i][j], matrix[i + 1][j]);
        }
        if (getMatrix(i, j + 1) !== '0') {
          uf.union(matrix[i][j], matrix[i][j + 1]);
        }
      }
    }
  }
  return uf.size;
}
