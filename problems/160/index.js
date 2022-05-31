/**
 * 数据结构：链表
 * 算法：遍历
 */
/**
 * Definition for singly-linked list.
 * const ListNode = (val) => {
 *     this.val = val;
 *     this.next = null;
 * }
 */

/**
 * @param {ListNode} headA
 * @param {ListNode} headB
 * @return {ListNode}
 */
const getIntersectionNode = (headA, headB) => {
  let map = {};
  let temp = headB;
  while (temp) {
    map[temp.val] = temp;
    temp = temp.next;
  }
  temp = headA;
  while (temp) {
    if (typeof map[temp.val] === "object" && map[temp.val] == temp) {
      return map[temp.val];
    }
    temp = temp.next;
  }
  return null;
};
