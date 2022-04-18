const allTokens = require('./tokens/allTokens.json')
const defaultTokens = require('./tokens/default.json')
const testnetTokens = require('./tokens/testnetTokens.json')
const allTokensTokenList = require('./metadata/allTokens.json')
const defaultTokenList = require('./metadata/default.json')
const testnetTokenList = require('./metadata/testnetTokens.json')

// Cross-chain lists
const ccTokenList = require('./metadata/crossChain.json')
const ccArbitrumTokens = require('./tokens/crossChain/arbitrum.json')
const ccAvalancheTokens = require('./tokens/crossChain/avalanche.json')
const ccBscTokens = require('./tokens/crossChain/bsc.json')
const ccEthereumTokens = require('./tokens/crossChain/ethereum.json')
const ccFantomTokens = require('./tokens/crossChain/fantom.json')
const ccFuseTokens = require('./tokens/crossChain/fuse.json')
const ccGnosisTokens = require('./tokens/crossChain/gnosis.json')
const ccMoonbeamTokens = require('./tokens/crossChain/moonbeam.json')
const ccMoonriverTokens = require('./tokens/crossChain/moonriver.json')
const ccOptimismTokens = require('./tokens/crossChain/optimism.json')
const ccPolygonTokens = require('./tokens/crossChain/polygonPoS.json')

// Staging list
const stagingTokenList = JSON.parse(JSON.stringify(allTokensTokenList))
stagingTokenList.name = 'Polygon Staging List'
const stagingList = [allTokens[0], allTokens[1], allTokens[2]]

// Remove the project information from lists
allTokens.forEach(token => {
  delete token.extensions.project
})

defaultTokens.forEach(token => {
  delete token.extensions.project
})

module.exports = function buildList () {
  const timestamp = new Date().toISOString()

  Object.assign(allTokensTokenList, { timestamp, tokens: allTokens }) // AllTokens tokenlist
  Object.assign(defaultTokenList, { timestamp, tokens: defaultTokens }) // Defaulkt tokenlist
  Object.assign(testnetTokenList, { timestamp, tokens: testnetTokens }) // Testnet tokenlist
  Object.assign(
    ccTokenList,
    {
      timestamp,
      tokens: ccArbitrumTokens
        .concat(ccAvalancheTokens)
        .concat(ccBscTokens)
        .concat(ccEthereumTokens)
        .concat(ccFantomTokens)
        .concat(ccFuseTokens)
        .concat(ccGnosisTokens)
        .concat(ccMoonbeamTokens)
        .concat(ccMoonriverTokens)
        .concat(ccOptimismTokens)
        .concat(ccPolygonTokens)
    }
  ) // Crosschain tokenlist
  Object.assign(stagingTokenList, { timestamp, tokens: stagingList }) // Staging Tokenlist

  return { allTokensTokenList, defaultTokenList, testnetTokenList, ccTokenList, stagingTokenList }
}
