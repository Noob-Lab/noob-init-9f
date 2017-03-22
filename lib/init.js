'use strict'
/**
 * 创建项目
 */

const co = require('co')
const prompt = require('co-prompt')
const chalk = require('chalk')
const fs = require('fs')
const exec = require('child_process').exec
const tplJson = require('../init/tpl')

module.exports = () => {
  co(function *() {
    let tplName = process.argv[3]
    let projectName = process.argv[4] || 'my-project'
    let gitUrl
    let branch

    if (!tplName) {
      tplName = yield prompt('Template name: ')
    } else if (!tplJson.tpl[tplName]) {     // 模板不存在
      console.log(chalk.red('\n × Template does not exit!'))
    	process.exit()
    }

		gitUrl = tplJson.tpl[tplName].url
		branch = tplJson.tpl[tplName].branch

     /**
      * 判断目录存在与否
      */

     if (projectName && fs.existsSync(projectName)) {
       console.log()
       console.log(chalk.red('projectName already existed! \n'))
       process.exit()
     }


    let cmdStr = `git clone -b ${branch} ${gitUrl} ${projectName}`
	  console.log(chalk.white('\n Start generating...'))


    /**
     * 执行git clone 命令
     */

	  exec(cmdStr, (error, stdout, stderr) => {
      if (error) {
        console.log(error)
        process.exit()
      }
      console.log(chalk.green('\n √ Generation completed!'))
      console.log(`\n cd ${projectName} && rm -rf .git \n`)
      process.exit()
	  })
  })
}
