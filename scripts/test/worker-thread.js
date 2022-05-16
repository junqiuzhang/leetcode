import { constants } from "fs";
import { access } from "fs/promises";
import { workerData as testGroup } from "worker_threads";

testGroup.forEach(async (testName) => {
  const testPath = `tests/${testName}/test.js`;
  let testAccessError = false;
  try {
    testAccessError = await access(testPath, constants.F_OK);
  } catch (error) {
    testAccessError = error;
  }
  if (!testAccessError) {
    import(`../../${testPath}`);
  }
});
