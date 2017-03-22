'use strict'
/**
 * 添加模板
 */

const co = require('co')
const prompt = require('co-prompt')
const chalk = require('chalk')
const tplJson = require('../init/tpl')
const showTpl = require('./showTpl')
const fs = require('fs')

module.exports = () => {
  co(function *() {
    // 模板名称
  	let tplName = yield prompt('Template name: ')
    if(tplName == "" && tplJson.tpl[tplName] !== 'undefined') {
      console.log(chalk.red('Template name empty or already existed!'))
      process.exit()
    }

  	let gitUrl = yield prompt('Repository address: ')      // 仓库地址
    if(gitUrl == "") {
      console.log(chalk.red('Repository address not empty!'))
      process.exit()
    }

  	let branch = yield prompt('Branch(master): ')          // 分支

    tplJson.tpl[tplName] = {}
    tplJson.tpl[tplName]['url'] = gitUrl.replace(/[\u0000-\u0019]/g, '')
    tplJson.tpl[tplName]['branch'] = branch || 'master'

    // 写入配置文件
		fs.writeFile(__dirname + '/../init/tpl.json', JSON.stringify(tplJson), 'utf-8', (err) => {
			if (err) console.log(err)
      console.log()
			console.log(chalk.green('New template added!\n'))
      console.log(chalk.grey('The last template list is: \n'))
      console.log(showTpl(tplJson))
      console.log('\n')
			process.exit()
		})
  })
}
