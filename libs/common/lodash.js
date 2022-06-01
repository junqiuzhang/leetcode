export const isNull = (value) => value === null;
export const isUndefined = (value) => value === undefined;
export const isBoolean = (value) =>
  typeof value === "boolean" || value instanceof Boolean;
export const isString = (value) =>
  typeof value === "string" || value instanceof String;
export const isNumber = (value) =>
  typeof value === "number" || value instanceof Number;
export const isFunction = (value) =>
  typeof value === "function" || value instanceof Function;
export const isArray = (value) => Array.isArray(value);
export const isObject = (value) =>
  typeof value === "object" &&
  !isNull(value) &&
  !isUndefined(value) &&
  !isBoolean(value) &&
  !isString(value) &&
  !isNumber(value) &&
  !isFunction(value) &&
  !isArray(value);
export const isEmpty = (value) =>
  (isArray(value) && value.length === 0) ||
  (isObject(value) && Object.keys(value).length === 0);
export const toValue = (value) => {
  let val;
  try {
    val = value.valueOf();
  } catch (error) {
    val = value;
  }
  return val;
};
export const toString = (value) => {
  let str;
  try {
    str = JSON.stringify(value);
  } catch (error) {
    try {
      str = value.toString();
    } catch (error) {
      str = new String(value);
    }
  }
  return str;
};
export const isEqual = (value1, value2) => {
  value1 = toValue(value1);
  value2 = toValue(value2);
  if (value1 === value2) {
    return true;
  }
  if (typeof value1 === "object" && typeof value2 === "object") {
    const keys1 = Object.keys(value1);
    const keys2 = Object.keys(value2);
    const keys = new Array(...keys1, ...keys2);
    return keys.every((k) => isEqual(value1[k], value2[k]));
  }
  return false;
};
export const flow = (...funcs) => {
  return (arg) => {
    let res = arg;
    funcs.forEach((func) => {
      if (!isFunction(func)) {
        throw new Error("Error: arguments must be a function!");
      }
      res = func(res);
    });
    return res;
  };
};
