import { parentPort } from "worker_threads";
function log(info) {
  if (parentPort) {
    return parentPort.postMessage(info);
  }
  return console.log(info);
}
export default log;
