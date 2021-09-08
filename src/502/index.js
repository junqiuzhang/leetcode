/**
 * 受限的贪心算法
 * @param {number} k
 * @param {number} w
 * @param {number[]} profits
 * @param {number[]} capital
 * @return {number}
 */
function findMaximizedCapital(k, w, profits, capital) {
  // 如果资金充足，就直接投资赚钱最多的k个项目
  if (capital.every((c) => w >= c)) {
    return (
      w +
      profits
        .sort((a, b) => b - a)
        .slice(0, k)
        .reduce((a, b) => a + b)
    );
  }
  // 垃圾回收时间
  const GC_TIME = Math.floor(Math.sqrt(k));
  // 整合数据
  let data = [];
  for (let i = 0; i < profits.length; i++) {
    data.push({
      p: profits[i],
      c: capital[i],
    });
  }
  data.sort((a, b) => (a.p > b.p ? -1 : 1));
  // 当前资金
  let curCapital = w;
  // 当前已投资的项目
  let curProjects = [];
  for (let i = 0; i < k; i++) {
    // 垃圾回收
    if (i % GC_TIME === 0) {
      data = data.filter((d, j) => !curProjects[j]);
      curProjects = [];
    }
    // 找到没投资且最赚钱的项目
    let curDataIndex = 0;
    let curData = null;
    for (let j = 0; j < data.length; j++) {
      if (!curProjects[j] && data[j].c <= curCapital) {
        curDataIndex = j;
        curData = data[j];
        break;
      }
    }
    // 投资这个项目
    if (curData) {
      curCapital += curData.p;
      curProjects[curDataIndex] = true;
    } else {
      break;
    }
  }
  return curCapital;
}
