/*
 * @lc app=leetcode.cn id=9 lang=javascript
 *
 * [9] 回文数
 */

// @lc code=start
/**
 * @param {number} x
 * @return {boolean}
 */
var isPalindrome = function (x) {
  let a = x.toString()
  let b = a.split('').reverse().join('')
  if (a === b) return true
  else return false
};
// @lc code=end

