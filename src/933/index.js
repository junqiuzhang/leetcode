class RecentCounter {
  constructor() {
    this.requests = [];
  }
  /**
   * @param {number} t
   * @return {number}
   */
  ping(t) {
    const min = t - 3000;
    const max = t;
    this.requests.push(t);
    this.requests = this.requests.filter((req) => req >= min && req <= max);
    return this.requests.length;
  }
}
