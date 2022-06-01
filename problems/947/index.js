import { UnionFind } from "../../libs/common/index.js";
/**
 * @param {number[][]} stones
 * @return {number}
 */
const removeStones = (stones) => {
  /*
   * 定义：一个元素覆盖与它同一行或同一列的元素
   * 问题等价于：求覆盖集合所有元素的最小集合
   * 如果所有(x,0)(0,y)点有元素，那么所有元素都可以被覆盖
   * 如果(x,y)点有元素，那么可以用(x,y)的元素代替(x,0)、(0,y)的元素
   * 如果(x0,y)没有元素，那么可以去掉(x0,0)的元素，同理，如果(x,y0)没有元素，可以去掉(x,y0)的元素
   */
  const items = new Set();
  for (let i = 0; i < stones.length; i++) {
    const [x, y] = stones[i];
    items.add(x);
    items.add(y + 10000);
  }
  const uf = new UnionFind(Array.from(items));
  for (let i = 0; i < stones.length; i++) {
    const [x, y] = stones[i];
    uf.union(x, y + 10000);
  }
  return stones.length - uf.size;
};
