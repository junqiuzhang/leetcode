/**
 * @param {number[]} apples
 * @param {number[]} days
 * @return {number}
 */
function eatenApples(apples, days) {
  /**
   * @param {number[][]} queue
   * @param {number} day
   * @param {number} maxDay
   * @return {number}
   */
  function gain(queue, day, maxDay) {
    const newItem = [day + days[day], apples[day]];
    if (day < maxDay) {
      let index = queue.findIndex((item) => newItem[0] < item[0]);
      if (index === -1) {
        index = queue.length;
      }
      queue.splice(index, 0, newItem);
    }
    return queue.filter((item) => {
      return item[0] > day && item[1] > 0;
    });
  }
  /**
   * @param {number[][]} queue
   * @param {number} total
   * @return {number}
   */
  function eat(queue, total) {
    if (queue[0]) {
      queue[0][1]--;
      return total + 1;
    }
    return total;
  }
  const maxDay = apples.length;
  let day = 0;
  let queue = [];
  let total = 0;
  while (day < maxDay || queue.length > 0) {
    console.log(queue, "today", day);
    queue = gain(queue, day, maxDay);
    total = eat(queue, total);
    console.log(queue, "total", total);
    day++;
  }
  return total;
}
