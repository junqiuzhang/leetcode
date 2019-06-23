/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */
var mergeTwoLists = function(l1, l2) {
    if (!l1) {
        return l2;
    } else if (!l2) {
        return l1;
    }
    function mergeLists(list0, list1, list2) {
        if (!list1) {
            list0.next = list2;
            list0 = list0.next;
            return list0;
        } else if (!list2) {
            list0.next = list1;
            list0 = list0.next;
            return list0;
        } else {
            if (list1.val < list2.val) {
                list0.next = new ListNode(list1.val);
                list0 = list0.next;
            } else {
                list0.next = new ListNode(list2.val);
                list0 = list0.next;
            }
            return mergeLists(list0, list1, list2);
        }
    }
    var list0 = new ListNode(null);
    mergeLists(list0, l1, l2);
    return list0.next;
};