/**
 * Definition for singly-linked list.
 * const ListNode = (val, next) => {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @return {ListNode}
 */
const oddEvenList = (head) => {
  if (!head) {
    return head;
  }
  let oddHead = head.next;
  let evenFoot = head;
  let evenTemp = head;
  let oddTemp = head.next;
  while (evenTemp && oddTemp) {
    evenTemp.next = oddTemp.next;
    evenTemp = evenTemp.next;
    if (evenTemp) {
      evenFoot = evenTemp;
      oddTemp.next = evenTemp.next;
      oddTemp = oddTemp.next;
    }
  }
  if (evenFoot) {
    evenFoot.next = oddHead;
  }
  return head;
};
