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
const deleteDuplicates = (head) => {
  if (!head) {
    return null;
  }
  let cur = head;
  while (cur.next) {
    if (cur.next.val == cur.val) {
      cur.next = cur.next.next;
      continue;
    }
    cur = cur.next;
  }
  return head;
};
