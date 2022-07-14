const schema = require("@uniswap/token-lists/src/tokenlist.schema.json")
const { expect } = require("chai")
const Ajv = require("ajv").default
const addFormats = require("ajv-formats").default
const buildList = require("../src/build")
const lists = require("../src/listRegistry.json")

const ajv = new Ajv({ allErrors: true, format: "full" })
addFormats(ajv)
const validator = ajv.compile(schema)

describe("buildList", () => {
  const tokenlists = buildList()

  it("validates", () => {
    expect(validator(tokenlists.vettedTokenList)).to.equal(true)
    expect(validator(tokenlists.popularTokenList)).to.equal(true)
    expect(validator(tokenlists.testnetTokenList)).to.equal(true)
    expect(validator(tokenlists.ccTokenList)).to.equal(true)
  })

  it("contains no duplicate child addresses", () => {
    let map = {}
    for (const token of tokenlists.vettedTokenList.tokens) {
      const key = `${token.address.toLowerCase()}`
      expect(typeof map[key]).to.equal(
        "undefined",
        `duplicate child address: ${token.address} - vetted list`
      )
      map[key] = true
    }
    map = {}
    for (const token of tokenlists.popularTokenList.tokens) {
      const key = `${token.address.toLowerCase()}`
      expect(typeof map[key]).to.equal(
        "undefined",
        `duplicate child address: ${token.address} - popular list`
      )
      map[key] = true
    }
    map = {}
    for (const token of tokenlists.testnetTokenList.tokens) {
      const key = `${token.address.toLowerCase()}`
      expect(typeof map[key]).to.equal(
        "undefined",
        `duplicate child address: ${token.address} - testnet list`
      )
      map[key] = true
    }
  })

  it("contains no duplicate root addresses", () => {
    let map = { pos: {}, plasma: {} }
    for (const token of tokenlists.vettedTokenList.tokens) {
      const tag = token.tags.includes("pos") ? "pos" : "plasma"
      const key = `${token.extensions.rootAddress.toLowerCase()}`
      expect(typeof map[tag][key]).to.equal(
        "undefined",
        `duplicate root address: ${token.extensions.rootAddress} - vetted list`
      )
      map[tag][key] = true
    }
    map = { pos: {}, plasma: {} }
    for (const token of tokenlists.popularTokenList.tokens) {
      const tag = token.tags.includes("pos") ? "pos" : "plasma"
      const key = `${token.extensions.rootAddress.toLowerCase()}`
      expect(typeof map[tag][key]).to.equal(
        "undefined",
        `duplicate root address: ${token.extensions.rootAddress} - popular list`
      )
      map[tag][key] = true
    }
    map = { pos: {}, plasma: {} }
    for (const token of tokenlists.testnetTokenList.tokens) {
      const tag = token.tags.includes("pos") ? "pos" : "plasma"
      const key = `${token.extensions.rootAddress.toLowerCase()}`
      expect(typeof map[tag][key]).to.equal(
        "undefined",
        `duplicate root address: ${token.extensions.rootAddress} - testnet list`
      )
      map[tag][key] = true
    }
  })

  it("contains no duplicate symbols", () => {
    let map = { pos: {}, plasma: {} }
    for (const token of tokenlists.vettedTokenList.tokens) {
      const tag = token.tags.includes("pos") ? "pos" : "plasma"
      const key = `${token.symbol.toLowerCase()}`
      expect(typeof map[tag][key]).to.equal(
        "undefined",
        `duplicate symbol: ${token.symbol} - vetted list`
      )
      map[tag][key] = true
    }
    map = { pos: {}, plasma: {} }
    for (const token of tokenlists.popularTokenList.tokens) {
      const tag = token.tags.includes("pos") ? "pos" : "plasma"
      const key = `${token.symbol.toLowerCase()}`
      expect(typeof map[tag][key]).to.equal(
        "undefined",
        `duplicate symbol: ${token.symbol} - popular list`
      )
      map[tag][key] = true
    }
    map = { pos: {}, plasma: {} }
    for (const token of tokenlists.testnetTokenList.tokens) {
      const tag = token.tags.includes("pos") ? "pos" : "plasma"
      const key = `${token.symbol.toLowerCase()}`
      expect(typeof map[tag][key]).to.equal(
        "undefined",
        `duplicate symbol: ${token.symbol} - testent list`
      )
      map[tag][key] = true
    }
  })

  it("contains no duplicate names", () => {
    let map = { pos: {}, plasma: {} }
    for (const token of tokenlists.vettedTokenList.tokens) {
      const tag = token.tags.includes("pos") ? "pos" : "plasma"
      const key = `${token.name.toLowerCase()}`
      expect(typeof map[tag][key]).to.equal(
        "undefined",
        `duplicate name: ${token.name} - vetted list`
      )
      map[tag][key] = true
    }
    map = { pos: {}, plasma: {} }
    for (const token of tokenlists.popularTokenList.tokens) {
      const tag = token.tags.includes("pos") ? "pos" : "plasma"
      const key = `${token.name.toLowerCase()}`
      expect(typeof map[tag][key]).to.equal(
        "undefined",
        `duplicate name: ${token.name} - popular list`
      )
      map[tag][key] = true
    }
    map = { pos: {}, plasma: {} }
    for (const token of tokenlists.testnetTokenList.tokens) {
      const tag = token.tags.includes("pos") ? "pos" : "plasma"
      const key = `${token.name.toLowerCase()}`
      expect(typeof map[tag][key]).to.equal(
        "undefined",
        `duplicate name: ${token.name} - testnet list`
      )
      map[tag][key] = true
    }
  })

  it("contains no duplicate names in list registry", () => {
    const map = {}
    for (const list of lists) {
      const key = `${list.name.toLowerCase()}`
      expect(typeof map[key]).to.equal(
        "undefined",
        `duplicate name: ${list.name} - list registry`
      )
      map[key] = true
    }
  })

  it("contains no duplicate URIs in list registry", () => {
    const map = {}
    for (const list of lists) {
      const key = `${list.listURI.toLowerCase()}`
      expect(typeof map[key]).to.equal(
        "undefined",
        `duplicate name: ${list.listURI} - list registry`
      )
      map[key] = true
    }
  })
})
