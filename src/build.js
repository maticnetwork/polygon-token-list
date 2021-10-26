const fs = require('fs')
const allTokens = require('./tokens/allTokens.json')
const defaultTokens = require('./tokens/default.json')
const allTokensTokenList = require('./metadata/allTokens.json')
const defaultTokenList = require('./metadata/default.json')

const timestamp = new Date().toISOString()

Object.assign(allTokensTokenList, {timestamp, "tokens": allTokens})
Object.assign(defaultTokenList, {timestamp, "tokens": defaultTokens})

fs.writeFile('build/allTokens.tokenlist.json', JSON.stringify(allTokensTokenList, null, 2), (err) => {
  if (err) {
    throw err
  }
  console.log('allTokens.tokenlist.json successfully built')
})

fs.writeFile('build/default.tokenlist.json', JSON.stringify(defaultTokenList, null, 2), (err) => {
  if (err) {
    throw err
  }
  console.log('default.tokenlist.json successfully built')
})
