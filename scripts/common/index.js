import { constants } from "fs";
import { readdir, access } from "fs/promises";
export const execEveryTest = async (execTest) => {
  const dirs = await readdir("test");
  dirs.forEach(async (dir) => {
    const filePath = `test/${dir}/test.js`;
    let fileAccessError = false;
    try {
      fileAccessError = await access(filePath, constants.F_OK);
    } catch (error) {
      fileAccessError = error;
    }
    if (!fileAccessError) {
      execTest(filePath);
    }
  });
};
