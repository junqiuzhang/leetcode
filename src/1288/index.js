/**
 * @param {number[][]} intervals
 * @return {number}
 */
function removeCoveredIntervals(intervals) {
  function loop(intervals) {
    if (intervals.length <= 1) {
      return intervals;
    }
    const lastInterval = intervals[intervals.length - 1];
    const restIntervals = loop(intervals.slice(0, -1));
    let allIntervals = [];
    for (let i = 0; i < restIntervals.length; i++) {
      const curInterval = restIntervals[i];
      if (
        curInterval[0] <= lastInterval[0] &&
        curInterval[1] >= lastInterval[1]
      ) {
        allIntervals = restIntervals;
        break;
      }
      if (
        curInterval[0] >= lastInterval[0] &&
        curInterval[1] <= lastInterval[1]
      ) {
        continue;
      }
      allIntervals.push(curInterval);
    }
    if (allIntervals !== restIntervals) {
      allIntervals.push(lastInterval);
    }
    return allIntervals;
  }
  return loop(intervals).length;
}

