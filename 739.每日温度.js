/*
 * @lc app=leetcode.cn id=739 lang=javascript
 *
 * [739] 每日温度
 * 暴力算法 先取列表第一项，对比后续的温度，如果后续温度大于当前温度，则删除第一项温度列表，如果后续没有大于当前温度，也删除，再把0放入返回列表中
 * 
 * 用索引的方法处理
 */

// @lc code=start
/**
 * @param {number[]} temperatures
 * @return {number[]}
 */
const dailyTemperatures = function (T) {
  const len = T.length // 缓存数组的长度 
  const stack = [] // 初始化一个栈   
  const res = (new Array(len)).fill(0) //  初始化结果数组，注意数组定长，占位为0
  for (let i = 0; i < len; i++) {
    // 若栈不为0，且存在打破递减趋势的温度值
    while (stack.length && T[i] > T[stack[stack.length - 1]]) {
      // 将栈顶温度值对应的索引出栈
      const top = stack.pop()
      // 计算 当前栈顶温度值与第一个高于它的温度值 的索引差值
      res[top] = i - top
    }
    // 注意栈里存的不是温度值，而是索引值，这是为了后面方便计算
    stack.push(i)
  }
  // 返回结果数组
  return res
};
// @lc code=end

