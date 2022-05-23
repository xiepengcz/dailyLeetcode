/*
 * @lc app=leetcode.cn id=3 lang=javascript
 *
 * [3] 无重复字符的最长子串
 */
// 遍历整个字符串，用 set 存储不重复的值，取其set长度保存
// 当存在遍历中的值与 set 的中的值重复时，则删除 set 中的值
// 比较当前的 set的长度 和最长set 的长度，最终返回最长的 set长度
// @lc code=start
/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLongestSubstring = function (s) {
  // 创建一个 set,用于计算最大长度
  const set = new Set()
  let j = 0, maxL = 0
  if (s.length === 0) return 0
  for (let i = 0; i < s.length; i++) {
    if (!set.has(s[i])) {
      set.add(s[i])
      maxL = Math.max(set.size, maxL)
    } else {
      while (set.has(s[i])) {
        set.delete(s[j])
        j++
      }
      set.add(s[i])
    }
  }
  return maxL
};
// @lc code=end

