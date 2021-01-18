const { UnionFind } = require('../common');
/**
 * @param {string[][]} accounts
 * @return {string[][]}
 */
var accountsMerge = function(accounts) {
  const same = (e1, e2) => {
    const el1 = accounts[e1];
    const el2 = accounts[e2];
    for (let i = 1; i < el1.length; i++) {
      const email1 = el1[i];
      for (let j = 1; j < el2.length; j++) {
        const email2 = el2[j];
        if (email1 === email2) {
          return true;
        }
      }
    }
    return false;
  }
  const uf = new UnionFind(accounts.length);
  for (let i = 0; i < accounts.length; i++) {
    for (let j = i; j < accounts.length; j++) {
      if (same(i, j)) {
        uf.union(i, j);
      }
    }
  }
  let elsList = [];
  uf.elsTree.forEach((val, key) => {
    const elRoot = uf.find(key);
    let els = elsList[elRoot];
    if (!els) els = [];
    els.push(key);
    elsList[elRoot] = els;
  });
  elsList = elsList.filter(els => els);
  const res = [];
  for (let i = 0; i < elsList.length; i++) {
    const els = elsList[i];
    res[i] = new Set();
    for (let j = 0; j < els.length; j++) {
      const name = accounts[els[j]][0];
      const emails = accounts[els[j]].slice(1);
      if (j === 0) {
        res[i] = new Set([name]);
      }
      res[i] = new Set([...res[i], ...emails]);
    }
  }
  return res.map(s => Array.from(s).sort());
};
