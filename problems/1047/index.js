/**
 * @param {string} S
 * @return {string}
 */
const removeDuplicates = (S) => {
  if (S.length <= 1) {
    return S;
  }
  const removedS = removeDuplicates(S.slice(0, S.length - 1));
  if (removedS[removedS.length - 1] === S[S.length - 1]) {
    return removedS.slice(0, removedS.length - 1);
  } else {
    return removedS + S[S.length - 1];
  }
};
