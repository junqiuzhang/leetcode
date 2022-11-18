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
  isObject(value) && Object.keys(value).length === 0;
export const isEqual = (value, other) => {
  if (
    isUndefined(value) ||
    isUndefined(other) ||
    isNull(value) ||
    isNull(other)
  ) {
    return value === other;
  }
  if (
    isBoolean(value) ||
    isBoolean(other) ||
    isString(value) ||
    isString(other) ||
    isNumber(value) ||
    isNumber(other) ||
    isFunction(value) ||
    isFunction(other)
  ) {
    return value.valueOf() === other.valueOf();
  }
  const valueKeys = Object.keys(value);
  const otherKeys = Object.keys(other);
  const keys = new Set([...valueKeys, ...otherKeys]);
  for (const key of keys) {
    if (!isEqual(value[key], other[key])) {
      return false;
    }
  }
  return true;
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
