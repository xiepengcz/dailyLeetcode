/*
 * @lc app=leetcode.cn id=232 lang=javascript
 *
 * [232] 用栈实现队列
 * 栈，后进先出；队列，先进先出
 */

// @lc code=start

var MyQueue = function () {
  this.list = []
};

/** 
 * @param {number} x
 * @return {void}
 */
MyQueue.prototype.push = function (x) {
  this.list.push(x)
};

/**
 * @return {number}
 */
MyQueue.prototype.pop = function () {
  return this.list.shift()
};

/**
 * @return {number}
 */
MyQueue.prototype.peek = function () {
  return this.list[0]
};

/**
 * @return {boolean}
 */
MyQueue.prototype.empty = function () {
  return !this.list.length
};

/**
 * Your MyQueue object will be instantiated and called as such:
 * var obj = new MyQueue()
 * obj.push(x)
 * var param_2 = obj.pop()
 * var param_3 = obj.peek()
 * var param_4 = obj.empty()
 */
// @lc code=end

