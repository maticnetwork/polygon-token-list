const allTokens = require('./tokens/allTokens.json')
const defaultTokens = require('./tokens/default.json')
const testnetTokens = require('./tokens/testnetTokens.json')
const allTokensTokenList = require('./metadata/allTokens.json')
const defaultTokenList = require('./metadata/default.json')
const testnetTokenList = require('./metadata/testnetTokens.json')

// Cross-chain lists
const ccTokensList = require('./metadata/crossChain.json')
const ccBscTokenList = require('./tokens/crossChain/bsc.json')
const ccPolygonTokenList = require('./tokens/crossChain/polygonPos.json')
const ccFantomTokenList = require('./tokens/crossChain/fantom.json')

module.exports = function buildList () {
  const timestamp = new Date().toISOString()

  Object.assign(allTokensTokenList, { timestamp, tokens: allTokens })
  Object.assign(defaultTokenList, { timestamp, tokens: defaultTokens })
  Object.assign(testnetTokenList, { timestamp, tokens: testnetTokens })
  Object.assign(ccTokensList, { timestamp, tokens: ccPolygonTokenList.concat(ccBscTokenList).concat(ccFantomTokenList) })

  return { allTokensTokenList, defaultTokenList, testnetTokenList, ccTokensList }
}
