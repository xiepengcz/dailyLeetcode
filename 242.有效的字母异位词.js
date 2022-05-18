/*
 * @lc app=leetcode.cn id=242 lang=javascript
 *
 * [242] 有效的字母异位词
 */

// @lc code=start
/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var isAnagram = function (s, t) {
  if(s.length!==t.length){
    return false
  }
  const obj = {}

  const obj2 = {}
  for (let a = 0; a < s.length; a++) {
    obj[s[a]] = (obj[s[a]] || 0) + 1
    obj2[t[a]] = (obj2[t[a]] || 0) + 1
  }
  for (let c in obj) {
    if(obj[c] !== obj2[c]) return false
  }
  return true
};
// @lc code=end

