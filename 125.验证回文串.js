/*
 * @lc app=leetcode.cn id=125 lang=javascript
 *
 * [125] 验证回文串
 */

// @lc code=start
/**
 * @param {string} s
 * @return {boolean}
 */
var isPalindrome = function (s) {
  if (s.toLowerCase().match(/[0-9a-zA-Z]/g) === null) return true
  let a = s.toLowerCase().match(/[0-9a-zA-Z]/g).join('')
  let b = s.toLowerCase().match(/[0-9a-zA-Z]/g).reverse().join('')
  if (a === b) return true
  else return false
};
// @lc code=end

