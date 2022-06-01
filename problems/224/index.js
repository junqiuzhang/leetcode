const OperatorMap = {
  "+": (m, n) => m + n,
  "-": (m, n) => m - n,
};
/**
 * @param {string} s
 * @return {string[]}
 */
export const generateTokens = (s) => {
  const noSpaceS = s.replace(/ /g, "");
  const stack = [[]];
  let token = "";
  for (let i = 0; i < noSpaceS.length; i++) {
    const char = noSpaceS[i];
    if (char === "(") {
      if (token) {
        stack[stack.length - 1].push(token);
      }
      const tmp = [];
      stack[stack.length - 1].push(tmp);
      stack.push(tmp);
      token = "";
    } else if (char === ")") {
      if (token) {
        stack[stack.length - 1].push(token);
      }
      stack.pop();
      token = "";
    } else if (OperatorMap[char]) {
      if (token) {
        stack[stack.length - 1].push(token);
      }
      stack[stack.length - 1].push(char);
      token = "";
    } else {
      token += char;
    }
  }
  if (token) {
    stack[stack.length - 1].push(token);
  }
  return stack[0];
};
/**
 * @param {(string|number)[]} tokens
 * @return {number}
 */
export const calculateTokens = (tokens) => {
  let result = 0;
  let operator = OperatorMap["+"];
  for (let i = 0; i < tokens.length; i++) {
    const token = tokens[i];
    if (Array.isArray(token)) {
      const childResult = calculateTokens(token);
      result = operator(result, childResult);
    } else if (OperatorMap[token]) {
      operator = OperatorMap[token];
    } else {
      result = operator(result, Number(token));
    }
  }
  return result;
};
/**
 * @param {string} s
 * @return {number}
 */
export const calculate = (s) => {
  const tokens = generateTokens(s);
  return calculateTokens(tokens);
};
