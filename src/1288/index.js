/**
 * @param {number[][]} intervals
 * @return {number}
 */
function removeCoveredIntervals(intervals) {
  let num = intervals.length;
  for (let i = 0; i < intervals.length; i++) {
    for (let j = i + 1; j < intervals.length; j++) {
      const interval1 = intervals[i];
      const interval2 = intervals[j];
      if (interval1[0] <= interval2[0] && interval1[1] >= interval2[1]) {
        intervals.splice(j, 1);
        j--;
        num--;
        continue;
      }
      if (interval1[0] >= interval2[0] && interval1[1] <= interval2[1]) {
        intervals.splice(i, 1);
        i--;
        num--;
        break;
      }
    }
  }
  return num;
}

