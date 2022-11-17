export const isNull = (value) => value === null;
export const isUndefined = (value) => value === undefined;
export const isBoolean = (value) =>
  typeof value === 'boolean' || value instanceof Boolean;
export const isString = (value) =>
  typeof value === 'string' || value instanceof String;
export const isNumber = (value) =>
  typeof value === 'number' || value instanceof Number;
export const isFunction = (value) =>
  typeof value === 'function' || value instanceof Function;
export const isArray = (value) => Array.isArray(value);
export const isObject = (value) => typeof value === 'object' && !isNull(value);
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
export const isEqual = (value, other) => {
  value = toValue(value);
  other = toValue(other);
  if (value === other) {
    return true;
  }
  if (isObject(value) && isObject(other)) {
    const keys1 = Object.keys(value);
    const keys2 = Object.keys(other);
    const keys = new Array(...keys1, ...keys2);
    return keys.every((k) => isEqual(value[k], other[k]));
  }
  return false;
};
export const flow = (...funcs) => {
  return (args) => {
    let value = args;
    for (let i = 0; i < funcs.length; i++) {
      const func = funcs[i];
      if (!isFunction(func)) {
        throw new Error('Error: arguments must be a function!');
      }
      value = func(value);
    }
    return value;
  };
};
export const get = (object, path, defaultValue) => {
  if (!isObject(object)) {
    throw new Error('Error: first arguments must be a object!');
  }
  if (!isArray(path)) {
    throw new Error('Error: second arguments must be a array!');
  }
  let currentValue = object;
  for (let i = 0; i < path.length; i++) {
    if (isUndefined(currentValue[path[i]])) {
      return defaultValue;
    }
    currentValue = currentValue[path[i]];
  }
  return currentValue;
};
export const set = (object, path, value) => {
  if (!isObject(object)) {
    throw new Error('Error: first arguments must be a object!');
  }
  if (!isArray(path)) {
    throw new Error('Error: second arguments must be a array!');
  }
  let currentValue = object;
  for (let i = 0; i < path.length - 1; i++) {
    if (isUndefined(currentValue[path[i]])) {
      currentValue[path[i]] = {};
    }
    currentValue = currentValue[path[i]];
  }
  currentValue[path[path.length - 1]] = value;
  return object;
};
export const memorize = (func) => {
  const cache = new Map();
  return (keyArg, ...restArgs) => {
    if (cache.has(keyArg)) {
      return cache.get(keyArg);
    }
    const val = func(keyArg, ...restArgs);
    cache.set(keyArg, val);
    return val;
  };
};
