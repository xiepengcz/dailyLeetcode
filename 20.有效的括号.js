/*
 * @lc app=leetcode.cn id=20 lang=javascript
 *
 * [20] 有效的括号
 * 使用队列来进行处理，当为左括号时入栈, 当为右括号时，判断栈顶和右括号是否匹配
 */

// @lc code=start
/**
 * @param {string} s
 * @return {boolean}
 */
var isValid = function (s) {
  if (!s) return false
  // 如果是奇数，则返回 false
  if (s.length % 2 === 1) return false
  let a = []
  for (let i of s) {
    if ('({['.includes(i)) {
      a.push(i)
    } else if (')}]'.includes(i)) {
      let result = a.pop() + i
      if (result === '()' || result === '{}' || result === '[]') {
        // 有效括号 不做处理
      } else {
        return false
      }
    }
  }
  if (a.length) return false
  else return true
};
// @lc code=end

