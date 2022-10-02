import { cpus } from 'os';
import { readdir } from 'fs/promises';
import { Worker } from 'worker_threads';

const TEST_GROUP_NUMBER = cpus().length;
const tests = await readdir('tests');
const testGroups = [];
const n = Math.ceil(tests.length / TEST_GROUP_NUMBER);

while (tests.length > 0) {
  testGroups.push(tests.splice(0, n));
}

testGroups.forEach(async (testGroup) => {
  const worker = new Worker(`./scripts/test-all/worker-thread.js`, {
    workerData: testGroup,
  });
  worker.on('message', (msg) => console.log(msg));
  worker.on('error', (msg) => console.error(msg));
});
