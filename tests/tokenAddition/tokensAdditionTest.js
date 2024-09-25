const { expect } = require("chai");
const buildList = require("../../src/build");
const lists = require("../../src/listRegistry.json");

describe("Test new token additions", () => {
    const tokenlists = buildList();

    it("contains no duplicate origin token addresses", () => {
        let map = {};
        for (const token of tokenlists.mappedTokenList.tokens) {
            const key = `${token.originTokenAddress.toLowerCase()}`;
            if (!map[token.originNetworkId]) {
                map[token.originNetworkId] = {};
            }
            expect(typeof map[token.originNetworkId][key]).to.equal(
                "undefined",
                `duplicate originTokenAddress: ${token.originTokenAddress} in mappedTokenList`
            );
            map[token.originNetworkId][key] = true;
        }
    });

    it("contains no duplicate names in list registry", () => {
        const map = {};
        for (const list of lists) {
            const key = `${list.name.toLowerCase()}`;
            expect(typeof map[key]).to.equal(
                "undefined",
                `duplicate name: ${list.name} - list registry`
            );
            map[key] = true;
        }
    });

    it("contains no duplicate URIs in list registry", () => {
        const map = {};
        for (const list of lists) {
            const key = `${list.listURI.toLowerCase()}`;
            expect(typeof map[key]).to.equal(
                "undefined",
                `duplicate name: ${list.listURI} - list registry`
            );
            map[key] = true;
        }
    });
});
