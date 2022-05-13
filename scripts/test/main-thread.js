import { cpus } from "os";
import { readdir } from "fs/promises";
import { Worker } from "worker_threads";
import { CONSOLE_TYPE_TO_METHOD } from "./constants.js";

const TEST_GROUP_NUMBER = cpus().length;
const tests = await readdir("test");
const testGroups = [];
const n = Math.ceil(tests.length / TEST_GROUP_NUMBER);

while (tests.length > 0) {
  testGroups.push(tests.splice(0, n));
}

testGroups.forEach(async (testGroup) => {
  const worker = new Worker(`./scripts/test/worker-thread.js`, {
    workerData: testGroup,
  });
  worker.on("message", (msg) => {
    const type = msg[0];
    const info = msg.slice(1);
    CONSOLE_TYPE_TO_METHOD[type](info);
  });
  worker.on("error", (msg) => console.error(msg));
});
