/*
 * @lc app=leetcode.cn id=680 lang=javascript
 *
 * [680] 验证回文字符串 Ⅱ
 * 
 * 用双指针法，从两端每个字符向中间判断
 * 如果存在一个不相等，则向(前/后)再进一位判断，翻转后判断是否为回文
 */

// @lc code=start
/**
 * @param {string} s
 * @return {boolean}
 */
var validPalindrome = function (s) {
  if (s.split('').reverse().join('') === s) return true
  let a = 0, b = s.length - 1, len = s.length
  let c = parseInt(s.length / 2)
  while (a <= c) {
    if (s[a] !== s[b]) {
      let text = s.substring(0, a) + s.substring(a + 1, len)
      let text1 = s.substring(0, b) + s.substring(b + 1, len)
      if (text.split('').reverse().join('') === text) return true
      else if (text1.split('').reverse().join('') === text1) { return true } else return false
    }
    a++
    b--
  }
};
// @lc code=end

