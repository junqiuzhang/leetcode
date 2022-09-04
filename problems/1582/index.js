/**
 * @param {number[][]} mat
 * @return {number}
 */
export const numSpecial = (mat) => {
  if (mat.length === 0) return 0;
  let ans = 0;
  for (let i = 0; i < mat.length; i++) {
    const index = mat[i].indexOf(1);
    const lastIndex = mat[i].lastIndexOf(1);
    if (index !== -1 && index === lastIndex) {
      let sum = 0;
      for (let j = 0; j < mat.length; j++) {
        const num = mat[j][index];
        if (num === 1) {
          if (sum === 1) {
            sum = 0;
            break;
          } else {
            sum += num;
          }
        }
      }
      if (sum === 1) {
        ans++;
      }
    }
  }
  return ans;
};
