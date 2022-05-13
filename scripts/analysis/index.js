import { EOL } from "os";
import { readFile } from "fs/promises";

const readme = await readFile("README.md", { encoding: "utf-8" });
const lines = readme.split(EOL);
const listIndex = lines.findIndex((line) => line === "-- | -- | -- | --");
const listLines = lines.slice(listIndex + 1);
const percentageTexts = listLines.map((line) => line.split(" | ").slice(2));
const percentageValues = percentageTexts.map((texts) =>
  texts.map((text) => parseFloat(text))
);
const timeComplexityPercentages = percentageValues
  .map((values) => values[0])
  .filter((value) => value);
const spaceComplexityPercentages = percentageValues
  .map((values) => values[1])
  .filter((value) => value);
const averageTimeComplexityPercentage =
  timeComplexityPercentages.reduce((ave, cur) => ave + cur) /
  timeComplexityPercentages.length;
const averageSpaceComplexityPercentage =
  spaceComplexityPercentages.reduce((ave, cur) => ave + cur) /
  spaceComplexityPercentages.length;
console.log(
  `Average time complexity percentage: `,
  averageTimeComplexityPercentage
);
console.log(
  `Average space complexity percentage: `,
  averageSpaceComplexityPercentage
);
