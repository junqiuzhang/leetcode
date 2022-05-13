import { array2list, ListNode } from '../common/index.js';
/**
 * @param {string | Array<T>} items
 * @return {[string | Array<T>, string | T]}
 */
function removeDuplicates(items) {
  if (items.length <= 1) {
    return [items, items[0]];
  }
  const [restItems, lastItem] = [
    items.slice(0, items.length - 1),
    items[items.length - 1],
  ];
  const [uniqueItems, duplicatedItem] = removeDuplicates(restItems);
  const [restUniqueItems, lastUniqueItem] = [
    uniqueItems.slice(0, uniqueItems.length - 1),
    uniqueItems[uniqueItems.length - 1],
  ];
  if (lastItem === lastUniqueItem) {
    return [restUniqueItems, lastItem];
  } else if (lastItem === duplicatedItem) {
    return [uniqueItems, lastItem];
  } else {
    return [uniqueItems.concat([lastItem]), lastItem];
  }
}
/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @return {ListNode}
 */
function deleteDuplicates(head) {
  const arr = [];
  while (head) {
    arr.push(head.val);
    head = head.next;
  }
  const [removedArr] = removeDuplicates(arr);
  const removedHead = array2list(removedArr);
  return removedHead;
}
