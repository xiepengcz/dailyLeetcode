/*
 * @lc app=leetcode.cn id=118 lang=javascript
 *
 * [118] 杨辉三角
 */

// @lc code=start
/**
 * @param {number} numRows
 * @return {number[][]}
 */

/*
输入: 5
输出:
 [
      [1],
     [1,1],
    [1,2,1],
   [1,3,3,1],
  [1,4,6,4,1]
 ]
 解法：R2:表示第二行；R2[2]：表示
 从第三行开始，就是
*/

var generate = function (numRows) {
  if (numRows === 1) return [[1]]
  let list = [[1], [1, 1]]
  let tempList = [1, 1]
  for (let index = 2; index < numRows; index++) {
    let cc = []
    let ls = tempList.length - 1
    tempList.forEach((i, index) => {
      if (index === 0) {
        cc.push(1)
        cc.push(1 + tempList[1])
      } else if (index === ls) {
        cc.push(1)
      } else {
        cc.push(tempList[index] + tempList[index + 1])
      }
    })
    list.push(cc)
    tempList = cc
  }
  return list
};
// @lc code=end

