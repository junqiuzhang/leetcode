/**
 * @param {number[][]} points
 * @return {number}
 */
const findMinArrowShots = (points) => {
  /** 
   * 证明：
   * 显然，最优解集合中必包含一个最优解由区间端点组成
   * 因为，每个区间中必包含一个最优解中的点
   * 所以，每个区间中的最优解中的点有三种可能，1 左端点 2 右端点 3 位于区间中的其他区间的端点
   * 所以，最左侧的区间最优解中的点有两种可能，1 左端点 2 右端点（区间中的端点等价于右端点）
   * 所以，问题f(区间集合) 等价于 f(区间集合 - 区间集合{x不属于该区间 | x是最左侧的区间右端点})
   * 
   * 算法：
   * 从最左侧的区间开始，判断右侧的区间是否与当前区间有交集
   * 如果有，则置当前区间为交集；
   * 如果没有，则置当前区间为右侧的区间
   * 
   * */
  if (points.length === 0) {
    return 0;
  }
  const sortedPoints = points.sort((a, b) => {
    return a[1] - b[1];
  });
  let count = 1;
  let axis = sortedPoints[0][1];
  for (let i = 1; i < sortedPoints.length; i++) {
    if (axis < sortedPoints[i][0]) {
      count++;
      axis = sortedPoints[i][1];
    }
  }
  return count;
};