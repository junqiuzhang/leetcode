const letterReg = /\[a-zA-Z]+/;
const numberReg = /[0-9]+/;
const bracketsReg = /\(([a-zA-Z0-9]+)\)([0-9]+)/;
/**
 *
 * @param {string} stringStream
 * @return {Array<Array<string>>}
 */
const token = (stringStream) => {
  const eleFirstReg = /[A-Z]/;
  const eleRestReg = /[a-z]/;
  const countReg = /[0-9]/;

  let curEleToken = '';
  let curCountToken = '';
  let tokenStream = [];
  for (let i = 0; i < stringStream.length; i++) {
    const char = stringStream[i];
    if (eleFirstReg.test(char)) {
      if (curEleToken) {
        if (!curCountToken) {
          curCountToken = '1';
        }
        tokenStream.push([curEleToken, curCountToken]);
        curEleToken = '';
        curCountToken = '';
      }
      curEleToken += char;
    } else if (eleRestReg.test(char)) {
      curEleToken += char;
    } else if (countReg.test(char)) {
      curCountToken += char;
    }
  }
  if (!curCountToken) {
    curCountToken = '1';
  }
  tokenStream.push([curEleToken, curCountToken]);
  return tokenStream;
};
/**
 * @param {Array<Array<string>>} tokenStream
 * @param {number} multiple
 * @return {object}
 */
const multiply = (tokenStream, multiple) => {
  for (let i = 0; i < tokenStream.length; i++) {
    tokenStream[i][1] = parseInt(tokenStream[i][1]) * multiple;
  }
  return tokenStream.map((token) => token.join('')).join('');
};
/**
 * @param {Array<Array<string>>} tokenStream
 * @return {object}
 */
const getCountFromTokenStream = (tokenStream) => {
  let countObj = {};
  for (let i = 0; i < tokenStream.length; i++) {
    const token = tokenStream[i];
    if (!countObj[token[0]]) {
      countObj[token[0]] = 0;
    }
    countObj[token[0]] += parseInt(token[1]);
  }
  return countObj;
};
/**
 * @param {object} countObj
 * @param {Array<string>} eleArr
 * @return {string}
 */
const getFormulaFormCount = (countObj, eleArr) => {
  let resFormula = '';
  for (let i = 0; i < eleArr.length; i++) {
    const ele = eleArr[i];
    resFormula += ele;
    if (countObj[ele] > 1) {
      resFormula += countObj[ele];
    }
  }
  return resFormula;
};
/**
 * @param {string} formula
 * @return {string}
 */
const countOfAtoms = (formula) => {
  while (true) {
    const execArr = bracketsReg.exec(formula);
    if (execArr) {
      const tokenArr = token(execArr[1]);
      const expandedStr = multiply(tokenArr, execArr[2]);
      formula = formula.replace(execArr[0], expandedStr);
    } else {
      break;
    }
  }
  const tokenArr = token(formula);
  const countObj = getCountFromTokenStream(tokenArr);
  const eleArr = Object.keys(countObj).sort();
  const resFormula = getFormulaFormCount(countObj, eleArr);
  return resFormula;
};
