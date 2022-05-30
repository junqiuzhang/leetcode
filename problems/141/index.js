/**
 * 数据结构：链表
 * 算法：双指针遍历
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
 * @return {boolean}
 */
const hasCycle = (head) => {
    var first = head;
    var second = head;
    while (first && first.next && second) {
        first = first.next.next;
        second = second.next;
        if (!first || !second) {
            return false;
        }
        if (first == second) {
            return true;
        }
    }
    return false;
};