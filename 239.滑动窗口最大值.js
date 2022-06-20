/*
 * @lc app=leetcode.cn id=239 lang=javascript
 *
 * [239] 滑动窗口最大值
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number[]}
 */
var maxSlidingWindow = function (nums, k) {
  let len = nums.length
  let left = 0, right = k - 1
  let list = []

  while (right < len) {
    let ls = nums.slice(left, right)
    let max = ls[0]
    for (let i = 0; i < ls.length; i++) {
      if (ls[i] > max) max = ls[i]
    }
    list.push(max)
    left++
    right++
  }
  return list
};


// @lc code=end

