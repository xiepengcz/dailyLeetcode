/*
 * @lc app=leetcode.cn id=8 lang=javascript
 *
 * [8] 字符串转换整数 (atoi)
 */

// @lc code=start
/**
 * @param {string} s
 * @return {number}
 */
var myAtoi = function (s) {
  // 去除两端空格
  s = s.trim()
  // 使用 parseInt特性(会把以数字开头的字符串转为数字，例如：'-21hello' -> -21),如果不是数字开头的，则转成 NaN
  let num = parseInt(s)
  if (isNaN(num)) return 0
  // 整数数超过 32 位有符号整数范围 [−2**31,  2**31 − 1] ，需要截断这个整数，使其保持在这个范围内
  else if (num > (2 ** 31 - 1)) return 2 ** 31 - 1
  else if (num < (-(2 ** 31))) return -(2 ** 31)
  else return parseInt(s)
};
// @lc code=end

