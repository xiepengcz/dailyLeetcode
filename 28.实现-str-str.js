/*
 * @lc app=leetcode.cn id=28 lang=javascript
 *
 * [28] 实现 strStr()
 */

// @lc code=start
/**
 * @param {string} haystack
 * @param {string} needle
 * @return {number}
 * 最佳解法是 KMP
 */
var strStr = function (haystack, needle) {
  if (!needle) return 0
  return haystack.indexOf(needle)
};
// @lc code=end

