import { ListNode } from '../utils/index.js';
/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @param {number[]} nums
 * @return {number}
 */
function numComponents(head, nums) {
  const numSet = new Set();
  let componentNum = 0;
  let temp = head;
  let preHas = false;

  for (let i = 0; i < nums.length; i++) {
    numSet.add(nums[i]);
  }

  while (temp) {
    if (preHas && !numSet.has(temp.val)) {
      componentNum++;
    }
    preHas = numSet.has(temp.val);
    temp = temp.next;
  }

  if (preHas) {
    componentNum++;
  }

  return componentNum;
}
