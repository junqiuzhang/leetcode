import { parentPort } from "worker_threads";
import { CONSOLE_METHOD_TO_TYPE } from "./constants.js";

function consoleDecorator(method) {
  return function (info) {
    if (parentPort) {
      return parentPort.postMessage(CONSOLE_METHOD_TO_TYPE[method] + info);
    }
    return method(info);
  };
}

console.log = consoleDecorator(console.log);
console.warn = consoleDecorator(console.warn);
console.error = consoleDecorator(console.error);
