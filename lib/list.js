'use strict'
/**
 * 列出所有模板
 */

const chalk = require('chalk')
const tplJson = require('../tpl')

module.exports = () => {
  console.log()
  console.log(chalk.grey('The template list is: \n'))
  console.log(tplJson)
  console.log()
  process.exit()
}
