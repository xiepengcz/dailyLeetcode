/*
 * @lc app=leetcode.cn id=169 lang=javascript
 *
 * [169] 多数元素
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number}
 */
var majorityElement = function(nums) {
  const map = {}
  const n = nums.length >> 1 // >>是右移运算符，意思是除以2
  for(let i = 0; i < nums.length; i++){
      map[nums[i]] = map[nums[i]] !== undefined ? map[nums[i]] + 1 : 1
      if(map[nums[i]] > n) return nums[i]
  }
};
// @lc code=end

