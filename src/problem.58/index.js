const { array2list } = require('../common')
/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode} head
 * @return {boolean}
 */
var isPalindrome = function(head) {
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
    head.next = null;
    for (var i = 0; i < len; i++) {
        next = temp && temp.next;
        temp.next = before;
        before = temp;
        temp = next;
        next = temp && temp.next;
    }
    // 对比前半部分链表和后半部分链表
    for (var i = 0; i < len; i++) {
        if (temp.val != next.val) {
            return false;
        }
        temp = temp.next;
        next = next.next;
    }
    return true;
};
var a = [1,2,2,1]
var list = array2list(a);
console.log(isPalindrome(list))