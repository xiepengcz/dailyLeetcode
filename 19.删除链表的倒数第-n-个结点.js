/*
 * @lc app=leetcode.cn id=19 lang=javascript
 *
 * [19] 删除链表的倒数第 N 个结点
 */

// @lc code=start
/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 * 简单解法
 * 遍历完整个节点，得出长度，然后再去删除
 * 
 * 另一种解法
 * 根据 n 来，使用双指针来处理
 * 定义n1,n2
 * n1 遍历到第 n个结点后，n2开始向前，同时n1也向前，这样就能形成一个 n 的区间，之后n1为 null 后，n2 指向下下个结点，完成删除操作
 */
/**
 * @param {ListNode} head
 * @param {number} n
 * @return {ListNode}
 */
var removeNthFromEnd = function (head, n) {
  // 定义一个头部节点 避免 head 只为一个结点时
  let headOne = new ListNode()
  headOne.next = head
  let n1 = headOne
  let n2 = headOne
  for (let i = 0; i <= n; i++) {
    n1 = n1.next
  }
  while (n1 !== null) {
    n1 = n1.next
    n2 = n2.next
  }
  n2.next = n2.next.next
  return headOne.next

};
// @lc code=end

