//     7
//   /   \
//   3   11
//  / \ / \
// 1  4 9  13
const find = (root, num) => {
  let down = null;
  let up = null;
  let cur = root;
  while (cur) {
    if (cur.val <= num) {
      down = cur;
      cur = cur.right;
    } else {
      up = cur;
      cur = cur.left;
    }
  }
  // ans[0] 下界 ans[1] 上界
  return [down, up];
};
