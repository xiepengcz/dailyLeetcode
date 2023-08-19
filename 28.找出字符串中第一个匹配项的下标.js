/*
 * @lc app=leetcode.cn id=28 lang=javascript
 *
 * [28] 找出字符串中第一个匹配项的下标
 * 这道题的最佳解法是用 KMP 
 */

// @lc code=start
/**
 * @param {string} haystack
 * @param {string} needle
 * @return {number}
 */
var strStr = function (haystack, needle) {
  const n = haystack.length, m = needle.length;
  if (m === 0) {
    return 0;
  }
  const list = new Array(m).fill(0);
  for (let i = 1, j = 0; i < m; i++) {
    while (j > 0 && needle[i] !== needle[j]) {
      j = list[j - 1];
    }
    if (needle[i] == needle[j]) {
      j++;
    }
    list[i] = j;
  }
  for (let i = 0, j = 0; i < n; i++) {
    while (j > 0 && haystack[i] != needle[j]) {
      j = list[j - 1];
    }
    if (haystack[i] == needle[j]) {
      j++;
    }
    if (j === m) {
      return i - m + 1;
    }
  }
  return -1;
};
// @lc code=end

