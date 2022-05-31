class Bank {
  /**
  * @param {number[]} balance
  */
  constructor(balance) {
    balance.splice(0, 0, 0);
    this.balance = balance;
  };
  /** 
   * @param {number} account1 
   * @param {number} account2 
   * @param {number} money
   * @return {boolean}
   */
  transfer(account1, account2, money) {
    if (account1 >= this.balance.length || account2 >= this.balance.length) {
      return false;
    }
    if (this.balance[account1] < money) {
      return false;
    }
    this.balance[account1] -= money;
    this.balance[account2] += money;
    return true;
  };
  
  /** 
   * @param {number} account 
   * @param {number} money
   * @return {boolean}
   */
  deposit(account, money) {
    if (account >= this.balance.length) {
      return false;
    }
    this.balance[account] += money;
    return true;
  };
  
  /** 
   * @param {number} account 
   * @param {number} money
   * @return {boolean}
   */
  withdraw(account, money) {
    if (account >= this.balance.length) {
      return false;
    }
    if (this.balance[account] < money) {
      return false;
    }
    this.balance[account] -= money;
    return true;
  };
}


/**
 * Your Bank object will be instantiated and called as such:
 * let obj = new Bank(balance)
 * let param_1 = obj.transfer(account1,account2,money)
 * let param_2 = obj.deposit(account,money)
 * let param_3 = obj.withdraw(account,money)
 */