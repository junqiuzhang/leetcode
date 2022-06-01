import { EOL } from 'os';
import { readFile } from 'fs/promises';
import { isNumber, flow } from '../../libs/common/index.js';

const sliceText = (readmeText) =>
  readmeText.split(`-- | -- | -- | --${EOL}`)[1];
const text2Table = (text) => text.split(EOL).map((row) => row.split('|'));
const filterPercentage = (table) => table.map((row) => row.slice(2));
const transposeTable = (table) =>
  table.reduce(
    (pre, cur) => pre.map((row, i) => [...row, cur[i]]),
    new Array(table[0].length).fill(new Array())
  );
const text2Number = (table) =>
  table.map((row) => row.map((text) => parseFloat(text)));
const filterNumber = (table) =>
  table.map((row) => row.filter((item) => isNumber(item) && !isNaN(item)));
const calculateAverage = (table) =>
  table.map((row) => row.reduce((pre, cur) => pre + cur) / row.length);
const formatAverage = (row) => row.map((item) => item.toFixed(2));

(async () => {
  const [timeComplexity, spaceComplexity] = flow(
    sliceText,
    text2Table,
    filterPercentage,
    text2Number,
    transposeTable,
    filterNumber,
    calculateAverage,
    formatAverage
  )(await readFile('README.md', { encoding: 'utf-8' }));

  console.log(`Average time complexity percentage: ${timeComplexity}%`);
  console.log(`Average space complexity percentage: ${spaceComplexity}%`);
})();
