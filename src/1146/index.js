class SnapshotArray {
  /**
   * @param {number} length
   */
  constructor(length) {
    this.store = [new Array(length).fill(0)];
    this.currentSnap = 0;
  }
  /**
   * @param {number} index
   * @param {number} val
   * @return {void}
   */
  set(index, val) {
    if (!this.store[this.currentSnap]) {
      this.store[this.currentSnap] = [];
    }
    this.store[this.currentSnap][index] = val;
  }
  /**
   * @return {number}
   */
  snap() {
    return this.currentSnap++;
  }
  /**
   * @param {number} index
   * @param {number} snap_id
   * @return {number}
   */
  get(index, snap_id) {
    let val = null;
    let snapId = snap_id;
    while (typeof val !== 'number') {
      if (!this.store[snapId]) {
        this.store[snapId] = [];
      }
      val = this.store[snapId][index];
      snapId--;
    }
    return val;
  }
}

