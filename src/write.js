const fs = require('fs')
const buildList = require('./build')
const listRegistry = require('./listRegistry.json')

const tokenlists = buildList()

fs.writeFile('build/tokenlists/allTokens.tokenlist.json', JSON.stringify(tokenlists.allTokensTokenList, null, 2), (err) => {
  if (err) {
    throw err
  }
  console.log('allTokens.tokenlist.json successfully built')
})

fs.writeFile('build/tokenlists/default.tokenlist.json', JSON.stringify(tokenlists.defaultTokenList, null, 2), (err) => {
  if (err) {
    throw err
  }
  console.log('default.tokenlist.json successfully built')
})

fs.writeFile('build/tokenlists/testnet.tokenlist.json', JSON.stringify(tokenlists.testnetTokenList, null, 2), (err) => {
  if (err) {
    throw err
  }
  console.log('testnet.tokenlist.json successfully built')
})

fs.writeFile('build/tokenlists/cross-chain.tokenlist.json', JSON.stringify(tokenlists.ccTokensList, null, 2), (err) => {
  if (err) {
    throw err
  }
  console.log('cross-chain.tokenlist.json successfully built')
})

fs.writeFile('build/listRegistry.json', JSON.stringify(listRegistry, null, 2), (err) => {
  if (err) {
    throw err
  }
  console.log('listRegistry.json successfully built')
})
