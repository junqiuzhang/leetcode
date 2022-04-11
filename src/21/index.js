/**
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */
function mergeTwoLists(l1, l2) {
  let head = new ListNode(null);
  let cur = head;
  let list1 = l1;
  let list2 = l2;
  while (cur && (list1 || list2)) {
    if (!list1) {
      cur.next = list2;
      break;
    }
    if (!list2) {
      cur.next = list1;
      break;
    }
    if (list1.val < list2.val) {
      cur.next = list1;
      list1 = list1.next;
    } else {
      cur.next = list2;
      list2 = list2.next;
    }
    cur = cur.next;
  }
  return head.next;
}
export default mergeTwoLists;
