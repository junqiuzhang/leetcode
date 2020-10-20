/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @return {void} Do not return anything, modify head in-place instead.
 */
var reorderList = function (head) {
  if (!head) {
    return head;
  }
  const listArray = [];
  let temp1 = head;
  while (temp1) {
    listArray.push(temp1);
    temp1 = temp1.next;
  }
  const len = listArray.length;
  const max = len / 2 - len % 2;
  let i;
  for (i = 0; i < max; i++) {
    listArray[len - i - 1].next = listArray[i].next;
    listArray[i].next = listArray[len - i - 1];
  }
  listArray[i].next = null;
};