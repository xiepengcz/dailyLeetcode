/*
 * @lc app=leetcode.cn id=141 lang=javascript
 *
 * [141] 环形链表
 */

// @lc code=start
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
var hasCycle = function (head) {
  // 只要结点存在，那么就继续遍历
  while (head) {
    // 如果 flag 已经立过了，那么说明环存在
    if (head.flag) {
      return true;
    } else {
      // 如果 flag 没立过，就立一个 flag 再往下走
      head.flag = true;
      head = head.next;
    }
  }
  return false;
};
// @lc code=end

