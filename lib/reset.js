'use strict'
/**
 * 重置模板
 */

const co = require('co')
const prompt = require('co-prompt')
const chalk = require('chalk')
const tplJson = require('../tpl')
const fs = require('fs')

module.exports = () => {
  co(function *() {
    var ok = yield prompt.confirm('template reset are you sure?(y/n) ')

    if (!ok) {
      process.exit()
    }

    tplJson.tpl = {}

    // 写入配置文件
    fs.writeFile(__dirname + '/../tpl.json', JSON.stringify(tplJson), 'utf-8', (err) => {
      if (err) console.log(err)
      console.log()
      console.log(chalk.grey('The last template list is: \n'))
      console.log(tplJson)
      console.log('\n')
      process.exit()
    })
  })
}
