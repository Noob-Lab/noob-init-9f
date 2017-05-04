/**
 * 从服务端拉取模板替换本地模板
 */
'use strict'
const path = require('path')
const fs = require('fs')
const exec = require('child_process').exec

module.exports = (handlerFn) => {
  let cmdStr = `git clone -b master http://192.168.45.120/web/init.git init`
  
  if (fs.existsSync('init')) cmdStr = `git pull`

  exec(cmdStr, (error, stdout, stderr) => {
    if (error) {
      console.log(error)
      process.exit()
    }
    handlerFn()
  })
}
