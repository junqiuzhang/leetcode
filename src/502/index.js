/**
 * 受限的贪心算法
 * @param {number} k
 * @param {number} w
 * @param {number[]} profits
 * @param {number[]} capital
 * @return {number}
 */
function findMaximizedCapital(k, w, profits, capital) {
  const GC_TIME = Math.floor(Math.sqrt(k));
  let data = [];
  for (let i = 0; i < profits.length; i++) {
    data.push({
      p: profits[i],
      c: capital[i],
    });
  }
  data.sort((a, b) => (a.p > b.p ? -1 : 1));
  let curCapital = w;
  let curProjects = [];
  for (let i = 0; i < k; i++) {
    if (i % GC_TIME === 0) {
      data = data.filter((d, j) => !curProjects[j]);
      curProjects = [];
    }
    let curDataIndex = 0;
    let curData = null;
    for (let j = 0; j < data.length; j++) {
      if (!curProjects[j] && data[j].c <= curCapital) {
        curDataIndex = j;
        curData = data[j];
        break;
      }
    }
    if (curData) {
      curCapital += curData.p;
      curProjects[curDataIndex] = true;
    } else {
      break;
    }
  }
  return curCapital;
}
