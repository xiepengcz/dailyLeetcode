/*
 * @lc app=leetcode.cn id=83 lang=javascript
 *
 * [83] 删除排序链表中的重复元素
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
 * 判断 当时节点和下一个节点是否相等 是则当前节点的 next 指向下个节点的 next
 */
var deleteDuplicates = function (head) {
  let b = head
  while (b && b.next) {
    if (b.val === b.next.val) {
      b.next = b.next.next
    } else {
      b = b.next
    }
  }
  return head
};
// @lc code=end

