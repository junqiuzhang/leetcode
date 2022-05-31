/**
 * @param {string} date
 * @return {number}
 */
const dayOfYear = (date) => {
  const dateObj = new Date(date);
  const day = dateObj.getTime() / (1000 * 60 * 60 * 24);
  dateObj.setDate(1);
  dateObj.setMonth(0);
  const newYearDateObj = new Date(dateObj);
  const newYearDay = newYearDateObj.getTime() / (1000 * 60 * 60 * 24);
  return day - newYearDay + 1;
};
