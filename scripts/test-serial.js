import { execEveryTest } from "./common/index.js";
execEveryTest((filePath) => {
  import(`../${filePath}`);
});
