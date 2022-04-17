import { constants } from "fs";
import { readdir, access } from "fs/promises";
import { Worker } from "worker_threads";
const dirs = await readdir("test");
dirs.forEach(async (dir) => {
  const filePath = `./test/${dir}/test.js`;
  let fileAccessError = false;
  try {
    fileAccessError = await access(filePath, constants.F_OK);
  } catch (error) {
    fileAccessError = error;
  }
  if (!fileAccessError) {
    const worker = new Worker(filePath);
    worker.on("message", (msg) => console.log(msg));
    worker.on("error", (msg) => console.log(msg));
  }
});
