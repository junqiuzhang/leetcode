import { EOL } from "os";
import { readFile } from "fs/promises";

const readme = await readFile("README.md", { encoding: "utf-8" });
const lines = readme.split(EOL);
const tableStartIndex = lines.findIndex((line) => line === "-- | -- | -- | --");
const table = lines.slice(tableStartIndex + 1).map((line) => line.split("|"));
const percentageTable = table.map((row) =>
  row.slice(2).map((text) => parseFloat(text))
);
const transposePercentageTable = percentageTable.reduce(
  (pre, cur) => [
    [...pre[0], cur[0]],
    [...pre[1], cur[1]],
  ],
  [[], []]
);
const [timeComplexityPercentages, spaceComplexityPercentages] =
  transposePercentageTable.map((percentages) =>
    percentages.filter((percentage) => percentage)
  );
const averageTimeComplexityPercentage =
  timeComplexityPercentages.reduce((ave, cur) => ave + cur, 0) /
  timeComplexityPercentages.length;
const averageSpaceComplexityPercentage =
  spaceComplexityPercentages.reduce((ave, cur) => ave + cur, 0) /
  spaceComplexityPercentages.length;
console.log(
  `Average time complexity percentage: ${averageTimeComplexityPercentage.toFixed(
    2
  )}%`
);
console.log(
  `Average space complexity percentage: ${averageSpaceComplexityPercentage.toFixed(
    2
  )}%`
);
