/**
 * @param {number[][]} A
 * @param {number} i
 * @param {number} j
 * @return {boolean}
 */
const checkIndex = (A, i, j) =>
  i >= 0 && i <= A.length - 1 && j >= 0 && j <= A[0].length - 1;
/**
 * @param {number} i
 * @param {number} j
 * @return {[number, number][]}
 */
const nextIndex = (i, j) => [
  [i - 1, j],
  [i + 1, j],
  [i, j - 1],
  [i, j + 1],
];
/**
 * @param {number[][]} A
 * @param {number} value
 * @return {[number, number]}
 */
const findIndex = (A, value) => {
  for (let i = 0; i < A.length; i++) {
    for (let j = 0; j < A[0].length; j++) {
      if (A[i][j] === value) {
        return [i, j];
      }
    }
  }
};
/**
 * @param {number[][]} A
 * @param {number} value
 * @return {[number, number][]}
 */
const findNeighborIndex = (A, value) => {
  const visited = new Array(A.length).fill(0).map((i) => []);
  const rootIndex = findIndex(A, value);
  const allIndex = [];
  const loopFindIndex = (i, j) => {
    if (A[i][j] !== value) return;
    if (visited[i][j] === 1) return;
    visited[i][j] = 1;
    allIndex.push([i, j]);
    nextIndex(i, j).forEach(([ni, nj]) => {
      if (!checkIndex(A, ni, nj)) return;
      if (!visited[ni][nj]) loopFindIndex(ni, nj);
    });
  };
  loopFindIndex(rootIndex[0], rootIndex[1]);
  return allIndex;
};
/**
 * @param {number[][]} A
 * @return {number}
 */
const shortestBridge = (A) => {
  const visited = new Array(A.length).fill(0).map((i) => []);
  const firstIndexArray = findNeighborIndex(A, 1);
  firstIndexArray.forEach(([i, j]) => {
    visited[i][j] = 1;
    A[i][j] = -1;
  });
  let secondIndexArray = findNeighborIndex(A, 1);
  secondIndexArray.forEach(([i, j]) => {
    visited[i][j] = 1;
  });
  let tempSecondIndexArray = [];
  let distance = 0;
  while (true) {
    const tempIndex1 = secondIndexArray.findIndex(([i, j]) => {
      const tempIndex2 = nextIndex(i, j).findIndex(([ni, nj]) => {
        if (!checkIndex(A, ni, nj)) return;
        if (A[ni][nj] === -1) return true;
        if (visited[ni][nj] === 1) return;
        visited[ni][nj] = 1;
        A[ni][nj] = distance;
        tempSecondIndexArray.push([ni, nj]);
      });
      if (tempIndex2 !== -1) return true;
    });
    if (tempIndex1 !== -1) return distance;
    secondIndexArray = tempSecondIndexArray;
    distance++;
  }
};
