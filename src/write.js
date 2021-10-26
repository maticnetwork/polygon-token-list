const fs = require('fs')
const buildList = require('./build')

const tokenlists = buildList()

fs.writeFile('build/allTokens.tokenlist.json', JSON.stringify(tokenlists.allTokensTokenList, null, 2), (err) => {
  if (err) {
    throw err
  }
  console.log('allTokens.tokenlist.json successfully built')
})

fs.writeFile('build/default.tokenlist.json', JSON.stringify(tokenlists.defaultTokenList, null, 2), (err) => {
  if (err) {
    throw err
  }
  console.log('default.tokenlist.json successfully built')
})
