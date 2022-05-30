//     8
//   8   7
// 9  2
//   4 7

//    8
//  9   2

const isSame = (aRoot, bRoot) => {
  if (bRoot === null) {
    return true;
  }
  if (aRoot === null) {
    return false;
  }
  if (aRoot.val === bRoot.val) {
    return isSame(aRoot.left, bRoot.left) && isSame(aRoot.right, bRoot.right);
  }
  return false;
}
const isSubTree = (aRoot, bRoot) => {
  if (isSame(aRoot, bRoot)) {
    return true;
  }
  if (isSubTree(aRoot.left, bRoot)) {
    return true;
  }
  if (isSubTree(aRoot.right, bRoot)) {
    return true;
  }
  return false;
}
