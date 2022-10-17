const polygonTokens = require('./tokens/polygonTokens.json')
const popularTokens = require('./tokens/popularTokens.json')
const testnetTokens = require('./tokens/testnetTokens.json')
const blacklistTokens = require('./tokens/blacklistTokens.json')
const polygonTokensTokenList = require('./metadata/polygonTokens.json')
const popularTokenList = require('./metadata/popularTokens.json')
const testnetTokenList = require('./metadata/testnetTokens.json')
const blacklistTokenList = require('./metadata/blacklistTokens.json')

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
const stagingTokenList = JSON.parse(JSON.stringify(polygonTokensTokenList))
stagingTokenList.name = 'Polygon Staging List'
const stagingList = [polygonTokens[0], polygonTokens[1], polygonTokens[2]]

// Remove the project information from lists
polygonTokens.forEach(token => {
  delete token.extensions.project
})

popularTokens.forEach(token => {
  delete token.extensions.project
})

module.exports = function buildList () {
  const timestamp = new Date().toISOString()

  Object.assign(polygonTokensTokenList, { timestamp, tokens: polygonTokens }) // PolygonTokens tokenlist
  Object.assign(popularTokenList, { timestamp, tokens: popularTokens }) // popular tokenlist
  Object.assign(testnetTokenList, { timestamp, tokens: testnetTokens }) // Testnet tokenlist
  Object.assign(blacklistTokenList, { timestamp, tokens: blacklistTokens }) // blacklist tokenlist
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

  return { polygonTokensTokenList, popularTokenList, testnetTokenList, blacklistTokenList, ccTokenList, stagingTokenList }
}
