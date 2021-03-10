const SpaceReg = /\s/g;
const NumberReg = /\d/g;
const OperateReg = /\+|\-/g;
const BracketReg = /\(|\)/g;
const GroupReg = /(\([\d\+\-\s]*\))/g;
/**
 * @param {string} s
 * @return {number}
 */
function calculate(s) {
  let res = s;
  let matchObj = res.match(GroupReg);
  while (matchObj) {
    matchObj = res.match(GroupReg);
    if (matchObj) {
      res = res.replace(matchObj[0], groupCalculate(matchObj[0]));
    }
  }
  return groupCalculate(res);
}
/**
 * @param {string} s
 * @return {number}
 */
function groupCalculate(s) {
  const { numbers, operates } = token(s);
  return numbers.reduce((pre, cur, i) => {
    let preNumber = Number(pre);
    let curNumber = Number(cur);
    if (operates[i - 1] === "+") {
      return preNumber + curNumber;
    }
    if (operates[i - 1] === "-") {
      return preNumber - curNumber;
    }
    return preNumber;
  });
}
/**
 * @param {string} s
 * @return {{numbers: string[];operates: string[];}}
 */
function token(s) {
  const formattedS = '0' + s.replace(BracketReg, "").replace(SpaceReg, "");
  const numbers = formattedS.split(OperateReg).filter(n => n);
  const operates = formattedS.split(NumberReg).filter((o) => o).map(operateTransform);
  return {
    numbers,
    operates,
  };
}
/**
 * @param {string} o
 * @return {{numbers: string[];operates: string[];}}
 */
function operateTransform(o) {
  let operate = o
  while (operate.length > 1) {
    operate = operate.replace('++', '+')
    operate = operate.replace('--', '+')
    operate = operate.replace('+-', '-')
    operate = operate.replace('-+', '-')
  }
  return operate
}
var s = "1-(2+3-(4+(5-(1-(2+4-(5+6))))))"
console.log(calculate(s));
