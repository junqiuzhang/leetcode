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
const insertionSortList = (head) => {
  if (!head) {
    return head;
  }
  const insert = (node, sortedNode) => {
    let temp = sortedNode;
    if (node.val <= temp.val) {
      sortedNode = node;
      node.next = temp;
      return sortedNode;
    }
    while (temp) {
      if (node.val >= temp.val && (!temp.next || node.val < temp.next.val)) {
        let tempNext = temp.next;
        temp.next = node;
        node.next = tempNext;
        break;
      }
      temp = temp.next;
    }
    return sortedNode;
  }
  let sortedHead = head;
  let insertHead = head.next;
  sortedHead.next = null;
  while (insertHead) {
    let insertNode = insertHead;
    insertHead = insertNode.next;
    insertNode.next = null;
    sortedHead = insert(insertNode, sortedHead);
  }
  return sortedHead;
};