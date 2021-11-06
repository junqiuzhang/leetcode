/**
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */
function mergeTwoLists(l1, l2) {
  var mergedList = new ListNode(null);
  var mergedListHead = mergedList;
  var list1 = l1;
  var list2 = l2;
  while (mergedList && (list1 || list2)) {
    if (!list1) {
      mergedList.next = list2;
      break;
    }
    if (!list2) {
      mergedList.next = list1;
      break;
    }
    if (list1.val < list2.val) {
      mergedList.next = list1;
      list1 = list1.next;
    } else {
      mergedList.next = list2;
      list2 = list2.next;
    }
    mergedList = mergedList.next;
  }
  return mergedListHead.next;
}
exports.mergeTwoLists = mergeTwoLists;