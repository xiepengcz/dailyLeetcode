/*
 * @lc app=leetcode.cn id=142 lang=javascript
 *
 * [142] 环形链表 II
 */

// @lc code=start
/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 * 用 flag 来做判断，当存在 flag 时，就是环形链表
 */

/**
 * @param {ListNode} head
 * @return {ListNode}
 */
var detectCycle = function (head) {
  while (head) {
    if (head.flag) {
      return head
    } else {
      head.flag = true
      head = head.next
    }
  }
  return null
};
// @lc code=end

