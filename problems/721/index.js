import { UnionFind } from '../../libs/common/index.js';
/**
 * @param {string[][]} accounts
 * @return {string[][]}
 */
const accountsMerge = (accounts) => {
  const emails = [];
  const ids = [];
  for (let i = 0; i < accounts.length; i++) {
    const act = accounts[i];
    for (let j = 1; j < act.length; j++) {
      emails.push(act[j]);
      ids.push(i);
    }
  }
  const uf = new UnionFind(emails);
  for (let i = 0; i < accounts.length; i++) {
    const act = accounts[i];
    const id = act[1];
    for (let j = 1; j < act.length; j++) {
      const email = act[j];
      uf.union(email, id);
    }
  }
  const elsList = new Map();
  uf.elsTree.forEach((val, key) => {
    const elRoot = uf.find(key);
    let els = elsList.get(elRoot);
    if (!els) els = [];
    els.push(key);
    elsList.set(elRoot, els);
  });
  const res = [];
  elsList.forEach((val, key) => {
    const emailIndex = emails.indexOf(key);
    const accountIndex = ids[emailIndex];
    res.push([accounts[accountIndex][0], ...val.sort()]);
  });
  return res;
};
