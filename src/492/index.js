/**
 * 数据结构：数学
 * 算法：遍历
 */
/**
 * @param {number} area
 * @return {number[]}
 */
var constructRectangle = function(area) {
  let middle = Math.floor(Math.sqrt(area))
  if (area % 2 === 0 && middle % 2 !== 0) {
    middle++
  } else if (area % 2 !== 0 && middle % 2 === 0) {
    middle++
  }
  let left = middle
  let right = middle
  for (let i = middle; i > 0; i--) {
    if (area % right === 0) {
      return area / right > right ? [area / right, right] : [right, area / right]
    } else if (area % left === 0) {
      return area / left > left ? [area / left, left] : [left, area / left]
    }
    left -= 2
    right += 2
  }
  return []
};