/*
 * @lc app=leetcode.cn id=206 lang=javascript
 *
 * [206] 反转链表
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
 * @param {ListNode} head
 * @return {ListNode}
 */
var reverseList = function (head) {
  if (!head.next) return head
  let pre = null
  let cur = head
  while (cur != null) {
    let next = cur.next // 1
    cur.next = pre // null
    pre = cur // head
    cur = next //  
  }
  return pre
};
// @lc code=end

