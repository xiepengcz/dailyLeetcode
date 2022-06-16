/*
 * @lc app=leetcode.cn id=26 lang=javascript
 *
 * [26] 删除有序数组中的重复项
 * 解法：因为需要在原数组上修改,并且不需要考虑数组中超出新长度后面的元素，所以可以使用双指针方法来处理
 * 如果快指针下的值与下一个值不同，慢指针下进行赋值，同时慢指针加1，
 * 如果快指针下的值与下一个值相同，则快指针加1
 * 最后返回慢指针
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number}
 */
var removeDuplicates = function (nums) {
  const n = nums.length;
  if (n === 0) {
    return 0;
  }
  let fast = 1, slow = 1;
  while (fast < n) {
    if (nums[fast] !== nums[fast - 1]) {
      nums[slow] = nums[fast];
      ++slow;
    }
    ++fast;
  }
  return slow
};
// @lc code=end

