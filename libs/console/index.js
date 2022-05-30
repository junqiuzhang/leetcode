import { parentPort } from "worker_threads";
import { CONSOLE_TYPE_TO_METHOD } from "./constants.js";

const postMessage = (type, messages) => {
  if (typeof parentPort.postMessage === "function") {
    return parentPort.postMessage({
      type,
      messages,
    });
  }
}
const printMessage = (type, messages) => {
  if (typeof CONSOLE_TYPE_TO_METHOD[type] === "function") {
    return CONSOLE_TYPE_TO_METHOD[type](...messages);
  }
}

export { postMessage, printMessage };
