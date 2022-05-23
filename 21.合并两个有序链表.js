/*
 * @lc app=leetcode.cn id=21 lang=javascript
 *
 * [21] 合并两个有序链表
 */

// @lc code=start
/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} list1
 * @param {ListNode} list2
 * @return {ListNode}
 */
var mergeTwoLists = function (list1, list2) {
  let l1 = list1
  let l2 = list2
  let l3 = { val: 0, next: null }
  while (l1 || l2) {
    if (l1.val > l2.val) {
      l3.val = l2.val
      l3.next = l1
    } else {
      l3.val = l1.val
      l3.next = l2
    }
    l1 = l1.next
    l2 = l2.next
  }
  if (l1.next == null) { }

};
// @lc code=end

