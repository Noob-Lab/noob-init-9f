module.exports = (tplJson) => {
  let tpl = ''
  for (var key in tplJson.tpl) {
    if (tplJson.tpl.hasOwnProperty(key)) {
      if (tplJson.tpl[key]) {
        tpl += `templateName: ${key}\nrepository: ${tplJson.tpl[key]['url']}\nbranch: ${tplJson.tpl[key]['branch']}\n\n`
      }
    }
  }
  return tpl
}
