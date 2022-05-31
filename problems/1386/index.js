/**
 * 二进制数的0，1，2，3位分别表示23，45，67，89四个位置是否有人
 */
/**
 * @param {number[]} seat
 * @return {number}
 */
const seat2status = (seat) => {
  const digit = Math.floor(seat[1] / 2) - 1;
  if (digit < 0 || digit > 3) return 0;
  return 1 << digit;
};
/**
 * @param {number} status
 * @return {number}
 */
const status2num = (status) => {
  if ([0].includes(status)) {
    return 0;
  } else if ([1, 2, 4, 8, 3, 9, 12].includes(status)) {
    return 1;
  } else {
    return 2;
  }
};
/**
 * @param {number} n
 * @param {number[][]} reservedSeats
 * @return {number}
 */
const maxNumberOfFamilies = (n, reservedSeats) => {
  reservedSeats.sort((a, b) => a[0] - b[0]);
  let num = 2 * n;
  let preRow = 0;
  let curRow = 0;
  let status = 0;
  for (let i = 0; i < reservedSeats.length; i++) {
    const seat = reservedSeats[i];
    curRow = seat[0];
    if (i !== 0 && curRow !== preRow) {
      num -= status2num(status);
      status = 0;
    }
    preRow = curRow;
    status = status | seat2status(seat);
  }
  num -= status2num(status);
  return num;
};
