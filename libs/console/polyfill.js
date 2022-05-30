import { isMainThread } from "worker_threads";
import { CONSOLE_METHOD_TO_TYPE } from "./constants.js";
import { postMessage, printMessage } from "./index.js";

const consoleDecorator = (method) => {
  if (typeof method !== "function")
    throw new Error("Error: arguments must be a function!");
  return (...messages) => {
    if (isMainThread) {
      return printMessage(CONSOLE_METHOD_TO_TYPE[method], messages);
    }
    return postMessage(CONSOLE_METHOD_TO_TYPE[method], messages);
  };
}

console.log = consoleDecorator(console.log);
console.warn = consoleDecorator(console.warn);
console.error = consoleDecorator(console.error);
