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
      console.log(matchObj[0], reduceCalculate(matchObj[0]));
      res = res.replace(matchObj[0], reduceCalculate(matchObj[0]));
      console.log(res);
    }
  }
  return reduceCalculate(res);
}
/**
 * @param {string} s
 * @return {number}
 */
function reduceCalculate(s) {
  const { numbers, operates } = token(s);
  console.log(numbers, operates);
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