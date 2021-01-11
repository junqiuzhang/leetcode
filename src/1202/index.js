const { UnionFind } = require('../common');
/**
 * @param {string} s
 * @param {number[][]} pairs
 * @return {string}
 */
var smallestStringWithSwaps = function(s, pairs) {
  /**
   * 证明：
   * 若2个字符可交换，则可视为连通
   * 若n个字符连通，则可视为连通图
   * 则可将其中任一字符交换到任一位置
   * 则可按照任意顺序排序
   */
  const ids = [];
  for (let i = 0; i < s.length; i++) {
    ids[i] = i;
  }
  const uf = new UnionFind(ids);
  for (let i = 0; i < pairs.length; i++) {
    uf.union(pairs[i][0], pairs[i][1]);
  }
  let sArray = s.split('');
  uf.forEach(val => {
    let chars = [];
    for (let i = 0; i < val.length; i++) {
      chars.push(s[val[i]]);
    }
    chars = chars.sort();
    for (let i = 0; i < val.length; i++) {
      sArray[val[i]] = chars[i];
    }
  });
  return sArray.join('');
};