/*
 * @lc app=leetcode.cn id=155 lang=javascript
 *
 * [155] 最小栈
 */

// @lc code=start

var MinStack = function () {
  this.a = []
};

/** 
 * @param {number} val
 * @return {void}
 */
MinStack.prototype.push = function (val) {
  this.a.push(val)
};

/**
 * @return {void}
 */
MinStack.prototype.pop = function () {
  this.a.pop()
};

/**
 * @return {number}
 */
MinStack.prototype.top = function () {
  this.a[this.a.length - 1]
};

/**
 * @return {number}
 */
MinStack.prototype.getMin = function () {
  let b = this.a.sort((a, b) => a > b)
  return b[0]
};

/**
 * Your MinStack object will be instantiated and called as such:
 * var obj = new MinStack()
 * obj.push(val)
 * obj.pop()
 * var param_3 = obj.top()
 * var param_4 = obj.getMin()
 */
// @lc code=end

