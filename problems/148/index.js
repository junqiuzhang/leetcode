/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @return {number}
 */
function getLength(head) {
  let cur = head;
  let i = 0;
  while (cur) {
    cur = cur.next;
    i++;
  }
  return i;
}
/**
 * @param {ListNode} head
 * @return {ListNode[]}
 */
function cut(head, length) {
  let cur = head;
  let restList = null;
  let i = 1;
  while (cur && i < length) {
    cur = cur.next;
    i++;
  }
  if (cur) {
    restList = cur.next;
    cur.next = null;
  }
  return restList;
}
/**
 * @param {ListNode} head1
 * @param {ListNode} head2
 * @return {ListNode}
 */
function merge(head1, head2) {
  let nHead = new ListNode(null);
  let cur = nHead;
  let cur1 = head1;
  let cur2 = head2;
  while (cur && (cur1 || cur2)) {
    if (!cur1) {
      cur.next = cur2;
      break;
    }
    if (!cur2) {
      cur.next = cur1;
      break;
    }
    if (cur1.val < cur2.val) {
      cur.next = cur1;
      cur1 = cur1.next;
    } else {
      cur.next = cur2;
      cur2 = cur2.next;
    }
    cur = cur.next;
  }
  return nHead.next;
}
/**
 * @param {ListNode} head
 * @return {ListNode}
 */
function sortList(head) {
  let length = getLength(head);
  let nHead = new ListNode(null);
  nHead.next = head;
  let cur = head;
  let tail = head;
  let list1 = head;
  let list2 = head;
  for (let i = 1; i < length; i *= 2) {
    cur = nHead.next;
    tail = nHead;
    for (let j = 0; cur; j += i) {
      list1 = cur;
      list2 = cut(cur, i);
      cur = cut(list2, i);
      tail.next = merge(list1, list2);
      while (tail.next) {
        tail = tail.next;
      }
    }
  }
  return nHead.next;
}
