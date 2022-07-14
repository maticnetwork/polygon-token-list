const vettedTokens = require("./tokens/polygonVetted.json")
const popularTokens = require("./tokens/polygonPopular.json")
const testnetTokens = require("./tokens/testnetTokens.json")
const vettedTokenList = require("./metadata/polygonVetted.json")
const popularTokenList = require("./metadata/polygonPopular.json")
const testnetTokenList = require("./metadata/testnetTokens.json")

// Cross-chain lists
const ccTokenList = require("./metadata/crossChain.json")
const ccArbitrumTokens = require("./tokens/crossChain/arbitrum.json")
const ccAvalancheTokens = require("./tokens/crossChain/avalanche.json")
const ccBscTokens = require("./tokens/crossChain/bsc.json")
const ccEthereumTokens = require("./tokens/crossChain/ethereum.json")
const ccFantomTokens = require("./tokens/crossChain/fantom.json")
const ccFuseTokens = require("./tokens/crossChain/fuse.json")
const ccGnosisTokens = require("./tokens/crossChain/gnosis.json")
const ccMoonbeamTokens = require("./tokens/crossChain/moonbeam.json")
const ccMoonriverTokens = require("./tokens/crossChain/moonriver.json")
const ccOptimismTokens = require("./tokens/crossChain/optimism.json")
const ccPolygonTokens = require("./tokens/crossChain/polygonPoS.json")

// Staging list
const stagingTokenList = JSON.parse(JSON.stringify(vettedTokenList))
stagingTokenList.name = "Polygon Staging List"
const stagingList = [vettedTokens[0], vettedTokens[1], vettedTokens[2]]

// Remove the project information from lists
vettedTokens.forEach((token) => {
  delete token.extensions.project
})

popularTokens.forEach((token) => {
  delete token.extensions.project
})

module.exports = function buildList() {
  const timestamp = new Date().toISOString()

  Object.assign(vettedTokenList, { timestamp, tokens: vettedTokens }) // Vetted tokenlist
  Object.assign(popularTokenList, { timestamp, tokens: popularTokens }) // Popular tokenlist
  Object.assign(testnetTokenList, { timestamp, tokens: testnetTokens }) // Testnet tokenlist
  Object.assign(ccTokenList, {
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
      .concat(ccPolygonTokens),
  }) // Crosschain tokenlist
  Object.assign(stagingTokenList, { timestamp, tokens: stagingList }) // Staging Tokenlist

  return {
    vettedTokenList,
    popularTokenList,
    testnetTokenList,
    ccTokenList,
    stagingTokenList,
  }
}
