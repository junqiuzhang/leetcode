/**
 * 数据结构：链表
 * 算法：遍历
 */
/**
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */
var mergeTwoLists = function(l1, l2) {
    var list0 = new ListNode(null);
    var list1 = l1;
    var list2 = l2;
    var l0 = list0;
    while(list1 || list2) {
        if (!list1) {
            list0.next = list2;
            break;
        } else if (!list2) {
            list0.next = list1;
            break;
        } else {
            if (list1.val < list2.val) {
                list0.next = new ListNode(list1.val);
                list1 = list1.next;
            } else {
                list0.next = new ListNode(list2.val);
                list2 = list2.next;
            }
            list0 = list0.next;
        }
    }
    return l0.next;
};