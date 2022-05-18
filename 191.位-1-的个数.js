/*
 * @lc app=leetcode.cn id=191 lang=javascript
 *
 * [191] 位1的个数
 */

// @lc code=start
/**
 * @param {number} n - a positive integer
 * @return {number}
 */
var hammingWeight = function(n) {
    let a = n.toString(2)
    let num = 0
    for(let i = 0;i<a.length;i++){
      if(a[i]==='1')num+=1
    }
    return num
};
// @lc code=end

