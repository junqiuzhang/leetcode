import { isArray, isNumber } from '../../libs/common/index.js';
/**
 * @param {number[][]} mat
 * @return {number[]}
 */
export const findDiagonalOrder = (mat) => {
  const isValid = (i, j) => isArray(mat[i]) && isNumber(mat[i][j]);
  const row = mat.length;
  const column = mat[0].length;
  const total = row * column;
  const ans = [];
  let i = 0;
  let j = 0;
  let direct = 1;
  while (ans.length < total) {
    while (isValid(i, j)) {
      ans.push(mat[i][j]);
      i -= direct;
      j += direct;
    }
    if (direct === 1) {
      if (isValid(i + 1, j)) {
        i++;
      } else {
        i += 2;
        j--;
      }
    } else {
      if (isValid(i, j + 1)) {
        j++;
      } else {
        i--;
        j += 2;
      }
    }
    direct = -direct;
  }
  return ans;
};
