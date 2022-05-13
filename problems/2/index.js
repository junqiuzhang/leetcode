/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */
function addTwoNumbers(l1, l2) {
  let c = 0;
  let h1 = l1;
  let h2 = l2;
  let h = new ListNode();
  let tmp = h;
  while (h1 || h2) {
    let sum = (h1 ? h1.val : 0) + (h2 ? h2.val : 0) + c;
    c = Math.floor(sum / 10);
    tmp.next = new ListNode(sum % 10);
    h1 = h1 && h1.next;
    h2 = h2 && h2.next;
    tmp = tmp.next;
  }
  if (c > 0) {
    tmp.next = new ListNode(c);
  }
  return h.next;
}
