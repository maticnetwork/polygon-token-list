const schema = require('@uniswap/token-lists/src/tokenlist.schema.json')
const { expect } = require('chai')
const Ajv = require('ajv').default
const addFormats = require('ajv-formats').default
const buildList = require('../src/build')
const lists = require('../src/listRegistry.json')

const ajv = new Ajv({ allErrors: true, format: 'full' })
addFormats(ajv)
const validator = ajv.compile(schema)

describe('buildList', () => {
  const tokenlists = buildList()

  it('validates', () => {
    expect(validator(tokenlists.allTokensTokenList)).to.equal(true)
    expect(validator(tokenlists.defaultTokenList)).to.equal(true)
    expect(validator(tokenlists.testnetTokenList)).to.equal(true)
    expect(validator(tokenlists.ccTokenList)).to.equal(true)
  })

  it('contains no duplicate child addresses', () => {
    let map = {}
    for (const token of tokenlists.allTokensTokenList.tokens) {
      const key = `${token.address}`
      expect(typeof map[key])
        .to.equal('undefined', `duplicate child address: ${token.address} - allTokens list`)
      map[key] = true
    }
    map = {}
    for (const token of tokenlists.defaultTokenList.tokens) {
      const key = `${token.address}`
      expect(typeof map[key])
        .to.equal('undefined', `duplicate child address: ${token.address} - default list`)
      map[key] = true
    }
    map = {}
    for (const token of tokenlists.testnetTokenList.tokens) {
      const key = `${token.address}`
      expect(typeof map[key])
        .to.equal('undefined', `duplicate child address: ${token.address} - testnet list`)
      map[key] = true
    }
  })

  it('contains no duplicate parent addresses', () => {
    let map = { pos: {}, plasma: {} }
    for (const token of tokenlists.allTokensTokenList.tokens) {
      const tag = token.tags.includes('pos') ? 'pos' : 'plasma'
      const key = `${token.extensions.parentAddress}`
      expect(typeof map[tag][key])
        .to.equal('undefined', `duplicate parent address: ${token.extensions.parentAddress} - allTokens list`)
      map[tag][key] = true
    }
    map = { pos: {}, plasma: {} }
    for (const token of tokenlists.defaultTokenList.tokens) {
      const tag = token.tags.includes('pos') ? 'pos' : 'plasma'
      const key = `${token.extensions.parentAddress}`
      expect(typeof map[tag][key])
        .to.equal('undefined', `duplicate parent address: ${token.extensions.parentAddress} - default list`)
      map[tag][key] = true
    }
    map = { pos: {}, plasma: {} }
    for (const token of tokenlists.testnetTokenList.tokens) {
      const tag = token.tags.includes('pos') ? 'pos' : 'plasma'
      const key = `${token.extensions.parentAddress}`
      expect(typeof map[tag][key])
        .to.equal('undefined', `duplicate parent address: ${token.extensions.parentAddress} - testnet list`)
      map[tag][key] = true
    }
  })

  it('contains no duplicate symbols', () => {
    let map = { pos: {}, plasma: {} }
    for (const token of tokenlists.allTokensTokenList.tokens) {
      const tag = token.tags.includes('pos') ? 'pos' : 'plasma'
      const key = `${token.symbol.toLowerCase()}`
      expect(typeof map[tag][key])
        .to.equal('undefined', `duplicate symbol: ${token.symbol} - allTokens list`)
      map[tag][key] = true
    }
    map = { pos: {}, plasma: {} }
    for (const token of tokenlists.defaultTokenList.tokens) {
      const tag = token.tags.includes('pos') ? 'pos' : 'plasma'
      const key = `${token.symbol.toLowerCase()}`
      expect(typeof map[tag][key])
        .to.equal('undefined', `duplicate symbol: ${token.symbol} - default list`)
      map[tag][key] = true
    }
    map = { pos: {}, plasma: {} }
    for (const token of tokenlists.testnetTokenList.tokens) {
      const tag = token.tags.includes('pos') ? 'pos' : 'plasma'
      const key = `${token.symbol.toLowerCase()}`
      expect(typeof map[tag][key])
        .to.equal('undefined', `duplicate symbol: ${token.symbol} - testent list`)
      map[tag][key] = true
    }
  })

  it('contains no duplicate names', () => {
    let map = { pos: {}, plasma: {} }
    for (const token of tokenlists.allTokensTokenList.tokens) {
      const tag = token.tags.includes('pos') ? 'pos' : 'plasma'
      const key = `${token.name.toLowerCase()}`
      expect(typeof map[tag][key])
        .to.equal('undefined', `duplicate name: ${token.name} - allTokens list`)
      map[tag][key] = true
    }
    map = { pos: {}, plasma: {} }
    for (const token of tokenlists.defaultTokenList.tokens) {
      const tag = token.tags.includes('pos') ? 'pos' : 'plasma'
      const key = `${token.name.toLowerCase()}`
      expect(typeof map[tag][key])
        .to.equal('undefined', `duplicate name: ${token.name} - default list`)
      map[tag][key] = true
    }
    map = { pos: {}, plasma: {} }
    for (const token of tokenlists.testnetTokenList.tokens) {
      const tag = token.tags.includes('pos') ? 'pos' : 'plasma'
      const key = `${token.name.toLowerCase()}`
      expect(typeof map[tag][key])
        .to.equal('undefined', `duplicate name: ${token.name} - testnet list`)
      map[tag][key] = true
    }
  })

  it('contains no duplicate names in list registry', () => {
    const map = {}
    for (const list of lists) {
      const key = `${list.name.toLowerCase()}`
      expect(typeof map[key])
        .to.equal('undefined', `duplicate name: ${list.name} - list registry`)
      map[key] = true
    }
  })

  it('contains no duplicate URIs in list registry', () => {
    const map = {}
    for (const list of lists) {
      const key = `${list.listURI.toLowerCase()}`
      expect(typeof map[key])
        .to.equal('undefined', `duplicate name: ${list.listURI} - list registry`)
      map[key] = true
    }
  })
})
