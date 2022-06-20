/*
 * @lc app=leetcode.cn id=1089 lang=javascript
 *
 * [1089] 复写零
 * 
 */

// @lc code=start
/**
 * @param {number[]} arr
 * @return {void} Do not return anything, modify arr in-place instead.
 */
var duplicateZeros = function (arr) {
  let i = 0, j = arr.length - 1, k = arr.length - 1;
  while (i < j) {
    if (arr[i++] === 0) --j;
  }

  // 此处特判需要读者多加思考
  if (i === j && arr[i] == 0) arr[k--] = arr[j--];

  while (j >= 0) {
    if (arr[j] === 0) arr[k--] = 0;
    arr[k--] = arr[j--];
  }
}
// @lc code=end

