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
 * @return {boolean}
 */
const isPalindrome = (head) => {
    if (!head || !head.next) {
      return true;
    }
    if (!head.next.next) {
      return head.val == head.next.val;
    } 
    // 获得链表长度
    var len = 0;
    var temp = head;
    while (temp) {
        temp = temp.next;
        len++;
    }
    // 翻转前半部分链表
    var before = head;
    temp = head.next;
    var next = head.next.next;
    var i = 0;
    head.next = null;
    while (temp && i < len/2 - 1) {
        next = temp && temp.next;
        temp.next = before;
        before = temp;
        temp = next;
        next = temp && temp.next;
        i++;
    }
    // 链表个数为奇数时修正链表
    if (len % 2) {
        before = before.next;
    }
    // 对比前半部分链表和后半部分链表
    i = 0;
    while (temp && i < len/2) {
        if (before.val != temp.val) {
            return false;
        }
        before = before.next;
        temp = temp.next;
        i++;
    }
    return true;
};