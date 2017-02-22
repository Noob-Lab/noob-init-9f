'use strict'
/**
 * 移除一条模板
 */

const co = require('co')
const prompt = require('co-prompt')
const chalk = require('chalk')
const tplJson = require('../tpl')
const fs = require('fs')

module.exports = () => {
  co(function *() {
    // 模板名称
    let tplName = process.argv[3]

    if(!tplName) {
      tplName = yield prompt('Template name: ')
      if (!tplName) {
        console.log(chalk.red('Template name not empty'))
        process.exit()
      }
    }

    if (tplJson.tpl[tplName]) {
      tplJson.tpl[tplName] = undefined
    } else {
      console.log(chalk.red('Template name not existed!'))
      process.exit()
    }

    // 写入配置文件
		fs.writeFile(__dirname + '/../tpl.json', JSON.stringify(tplJson), 'utf-8', (err) => {
			if (err) console.log(err)
      console.log()
			console.log(chalk.green('Template deleted!'))
      console.log(chalk.grey('The last template list is: \n'))
      console.log(tplJson)
      console.log('\n')
			process.exit()
		})
  })
}
