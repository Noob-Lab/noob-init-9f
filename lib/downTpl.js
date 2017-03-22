/**
 * 从服务端拉取模板替换本地模板
 */
'use strict'
const path = require('path')
const simpleGit = require('simple-git')(path.join(__dirname, '../init'))    // https://github.com/steveukx/git-js

module.exports = (handlerFn) => {
  simpleGit.pull( handlerFn)
}
