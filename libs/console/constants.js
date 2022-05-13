const CONSOLE_METHOD_TO_TYPE = {
  [console.log]: 0,
  [console.warn]: 1,
  [console.error]: 2,
};
const CONSOLE_TYPE_TO_METHOD = {
  0: console.log,
  1: console.warn,
  2: console.error,
};
export { CONSOLE_METHOD_TO_TYPE, CONSOLE_TYPE_TO_METHOD };
