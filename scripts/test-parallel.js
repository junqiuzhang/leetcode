import { Worker } from "worker_threads";
import { execEveryTest } from "./common/index.js";
execEveryTest((filePath) => {
  const worker = new Worker(`./${filePath}`);
  worker.on("message", (msg) => console.log(msg));
  worker.on("error", (msg) => console.log(msg));
});
