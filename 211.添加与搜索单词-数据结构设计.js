/*
 * @lc app=leetcode.cn id=211 lang=javascript
 *
 * [211] 添加与搜索单词 - 数据结构设计
 */

// @lc code=start
// 创建一个对象，用来存储对应长度的 word 列表
var WordDictionary = function () {
  this.textObj = {}
};

/** 
 * @param {string} word
 * @return {void}
 * 存在对应长度的就添加，没有的就创建
 */
WordDictionary.prototype.addWord = function (word) {
  if (!this.textObj[word.length]) this.textObj[word.length] = [word]
  else this.textObj[word.length].push(word)
};

/** 
 * @param {string} word
 * @return {boolean}
 */
WordDictionary.prototype.search = function (word) {
  let textObj = this.textObj
  let wLen = word.length
  // 没有对应长度的 key，就是说明没有该值 返回 false
  if (!textObj[wLen]) return false
  // 如果存在点号，则用正则遍历匹配
  else if (word.includes('.')) {
    let reg = new RegExp(word)
    for (let i = 0; i < textObj[wLen].length; i++) {
      if (reg.test(textObj[wLen][i])) return true
    }
    return false
    // 完整字符返回是否包含
  } else return textObj[wLen].includes(word)
};

/**
 * Your WordDictionary object will be instantiated and called as such:
 * var obj = new WordDictionary()
 * obj.addWord(word)
 * var param_2 = obj.search(word)
 */
// @lc code=end

