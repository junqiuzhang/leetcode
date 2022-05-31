/**
 * @param {number[][]} accounts
 * @return {number}
 */
const maximumWealth = (accounts) => {
  let maxWealth = 0;
  for (let i = 0; i < accounts.length; i++) {
    const account = accounts[i];
    let sumWealth = 0;
    for (let j = 0; j < account.length; j++) {
      sumWealth += account[j];
    }
    if (sumWealth > maxWealth) {
      maxWealth = sumWealth;
    }
  }
  return maxWealth;
};
