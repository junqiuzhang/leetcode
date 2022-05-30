/**
 * 标签：贪心算法
 */
/**
 * @param {number[]} bills
 * @return {boolean}
 */
const lemonadeChange = (bills) => {
  const cash = [] // 5, 10, 20
  cash[5] = 0
  cash[10] = 0
  cash[20] = 0
  for (let i = 0; i < bills.length; i++) {
    const pay = bills[i];
    cash[pay]++
    if (!payBack(pay, cash)) {
      return false
    }
  }
  return true
};
const payBack = (pay, cash) => {
  if (pay === 20) {
    if (cash[5] > 0 && cash[10] > 0) {
      cash[5]--
      cash[10]--
    } else if (cash[5] >= 3) {
      cash[5]-=3
    } else {
      return false
    }
  } else if (pay === 10) {
    if (cash[5] > 0) {
      cash[5]--
    } else {
      return false
    }
  }
  return true
}
var a = [10,10]
console.log(lemonadeChange(a));
