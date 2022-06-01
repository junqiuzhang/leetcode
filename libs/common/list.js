import { isArray, isEmpty } from './lodash.js';
/**
 * 链表
 */
export class ListNode {
  /**
   * @param {any} val
   * @param {ListNode | undefined} next
   */
  constructor(val = null, next = null) {
    this.val = val;
    this.next = next;
  }
}
/**
 * 数组转链表
 * @param {any[]} arr
 * @returns {ListNode}
 */
export const array2list = (arr) => {
  if (!isArray(arr)) throw new Error('Error: arguments must be an array!');
  if (isEmpty(arr)) return null;
  const list = new ListNode(arr[0]);
  let node = list;
  for (let i = 0; i < arr.length; i++) {
    const item = arr[i];
    const next = new ListNode(item);
    node.next = next;
    node = node.next;
  }
  return list;
};
/**
 * 链表转数组
 * @param {ListNode}
 * @returns {any[]}
 */
export const list2array = (list) => {
  if (!list) return [];
  const next = list2array(list.next);
  return [list.val, ...next];
};
