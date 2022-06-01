import { isArray } from './lodash.js';
/**
 * 并查集
 */
export class UnionFind {
  constructor(param) {
    this.elsTree = new Map();
    this.size = 0;
    if (isArray(param)) {
      param.forEach((v) => {
        this.elsTree.set(v, v);
      });
      this.size = param.length;
    }
  }
  find(el) {
    if (this.elsTree.get(el) !== el) {
      this.elsTree.set(el, this.find(this.elsTree.get(el)));
    }
    return this.elsTree.get(el);
  }
  same(el1, el2) {
    const elRoot1 = this.find(el1);
    const elRoot2 = this.find(el2);
    return elRoot1 === elRoot2;
  }
  union(el1, el2) {
    const elRoot1 = this.find(el1);
    const elRoot2 = this.find(el2);
    if (elRoot1 === elRoot2) return;
    this.elsTree.set(elRoot1, elRoot2);
    this.size--;
  }
}
