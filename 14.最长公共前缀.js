/*
 * @lc app=leetcode.cn id=14 lang=javascript
 *
 * [14] 最长公共前缀
 */

// @lc code=start
/**
 * @param {string[]} strs
 * @return {string}
 */
var longestCommonPrefix = function (strs) {
  if (strs.length === 0) return ''
  if (strs.length === 1) return strs[0]
  function getStr(a, b) {
    let str = ''
    for (let i = 0; i < a.length; i++) {
      if (a[i] === b[i]) {
        str += a[i]
      } else {
        return str
      }
    }
    return str
  }
  let text = strs.reduce(getStr,strs[0])
  return text
};
// @lc code=end

