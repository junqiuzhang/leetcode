/**
 * 数据结构：链表
 * 算法：链表操作
 */
/**
 * Definition for singly-linked list.
 * const ListNode = (val) => {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode} head
 * @return {ListNode}
 */
const reverseList = (head) => {
  if (!head) {
    return null;
  }
  if (!head.next) {
    return head;
  }
  let before = head;
  let temp = head.next;
  let next = head.next.next;
  head.next = null;
  while (temp) {
    next = temp && temp.next;
    temp.next = before;
    before = temp;
    temp = next;
    next = temp && temp.next;
  }
  return before;
};
