/*
 * @lc app=leetcode.cn id=82 lang=javascript
 *
 * [82] 删除排序链表中的重复元素 II
 */

// @lc code=start
/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 * 解法：在链表处新增一个头部节点 dummy, dummy 的 next指向 head
 * 
 */
/**
 * @param {ListNode} head
 * @return {ListNode}
 */
var deleteDuplicates = function (head) {
  let l = new ListNode()
  l.next = head
  let ls = l
  while (ls.next && ls.next.next) {
    if (ls.next.val === ls.next.next.val) {
      let val = ls.next.val
      while (ls.next && ls.next.val === val) {
        ls.next = ls.next.next
      }
    } else {
      ls = ls.next
    }
  }
  return l.next
};
// @lc code=end

