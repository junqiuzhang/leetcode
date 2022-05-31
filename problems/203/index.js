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
 * @param {ListNode} head
 * @param {number} val
 * @return {ListNode}
 */
const removeElements = (head, val) => {
    if (!head) {
        return null;
    }
    let before = {
        val: Infinity,
        next: head
    };
    let temp = head;
    while (temp) {
        if (temp.val == val) {
            if (temp == head) {
                before.next = before.next && before.next.next;
                head = head.next;
                temp = head;
                continue;
            }
            before.next = before.next && before.next.next;
            temp = temp.next;
            continue;
        }
        temp = temp.next;
        before = before.next;
    }
    return head;
};