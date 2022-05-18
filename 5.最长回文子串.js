/*
 * @lc app=leetcode.cn id=5 lang=javascript
 *
 * [5] 最长回文子串
 */

// @lc code=start
/**
 * @param {string} s
 * @return {string}
 */
var longestPalindrome = function (s) {
  if (s === s.split('').reverse().join('')) { return s }
  let len = s.length - 1

  while (len > 0) {
    let a = s.length - len
    let i = 0
    while (i <= a) {
      let ia = s.slice(i, len + i)
      let ib = s.slice(i, len + i).split('').reverse().join('')
      if (ia === ib) return ia
      else i++
    }
    len--
  }
};
// @lc code=end

