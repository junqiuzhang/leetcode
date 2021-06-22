/**
 * @param {number[][]} intervals
 * @return {number}
 */
function removeCoveredIntervals(intervals) {
  const sortedIntervals = intervals.sort((a, b) => {
    if (a[0] < b[0]) {
      return -1;
    } else if (a[0] > b[0]) {
      return 1;
    } else {
      if (a[1] > b[1]) {
        return -1;
      } else {
        return 1;
      }
    }
  });
  let num = 1;
  let interval1 = sortedIntervals[0];
  for (let i = 0; i < sortedIntervals.length - 1; i++) {
    const interval2 = sortedIntervals[i + 1];
    if (interval1[1] < interval2[1]) {
      num++;
      interval1 = sortedIntervals[i + 1];
    }
  }
  return num;
}
