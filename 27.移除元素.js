/*
 * @lc app=leetcode.cn id=27 lang=javascript
 *
 * [27] 移除元素
 * 快慢指针来进行处理 因为需要在原数组下修改 当 fast 指针下的值与 val 不相等，则对应数组的low 指针下的值与其相等，并且 low++，fast++
 * 当 fast 指针与 val相等，fast++
 * 最后返回 low
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @param {number} val
 * @return {number}
 */
var removeElement = function (nums, val) {
  const n = nums.length;
  let low = 0;
  for (let fast = 0; fast < n; fast++) {
    if (nums[fast] !== val) {
      nums[low] = nums[fast];
      low++;
    }
  }
  return low;
};
// @lc code=end

