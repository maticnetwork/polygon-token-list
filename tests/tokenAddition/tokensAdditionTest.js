const { expect } = require("chai");
const buildList = require("../../src/build");
const lists = require("../../src/listRegistry.json");

describe("Test new token additions", () => {
    const tokenlists = buildList();

    it("contains no duplicate child addresses", () => {
        let map = {};
        for (const token of tokenlists.polygonTokensTokenList.tokens) {
            const key = `${token.address.toLowerCase()}`;
            expect(typeof map[key]).to.equal(
                "undefined",
                `duplicate child address: ${token.address} - polygonTokens list`
            );
            map[key] = true;
        }
        map = {};
        for (const token of tokenlists.popularTokenList.tokens) {
            const key = `${token.address.toLowerCase()}`;
            expect(typeof map[key]).to.equal(
                "undefined",
                `duplicate child address: ${token.address} - polpularTokens list`
            );
            map[key] = true;
        }
        map = {};
        for (const token of tokenlists.testnetTokenList.tokens) {
            const key = `${token.address.toLowerCase()}`;
            expect(typeof map[key]).to.equal(
                "undefined",
                `duplicate child address: ${token.address} - testnet list`
            );
            map[key] = true;
        }
        map = {};
        for (const token of tokenlists.blacklistTokenList.tokens) {
            const key = `${token.address.toLowerCase()}`;
            expect(typeof map[key]).to.equal(
                "undefined",
                `duplicate child address: ${token.address} - blacklist token list`
            );
            map[key] = true;
        }
    });

    it("contains no duplicate root addresses", () => {
        let map = { pos: {}, plasma: {} };
        for (const token of tokenlists.polygonTokensTokenList.tokens) {
            if (
                token.extensions.rootAddress.toLowerCase() !=
                "0x0000000000000000000000000000000000000000"
            ) {
                const tag = token.tags.includes("pos") ? "pos" : "plasma";
                const key = `${token.extensions.rootAddress.toLowerCase()}`;
                expect(typeof map[tag][key]).to.equal(
                    "undefined",
                    `duplicate root address: ${token.extensions.rootAddress} - polygonTokens list`
                );
                map[tag][key] = true;
            }
        }
        map = { pos: {}, plasma: {} };
        for (const token of tokenlists.popularTokenList.tokens) {
            if (
                token.extensions.rootAddress.toLowerCase() !=
                "0x0000000000000000000000000000000000000000"
            ) {
                const tag = token.tags.includes("pos") ? "pos" : "plasma";
                const key = `${token.extensions.rootAddress.toLowerCase()}`;
                expect(typeof map[tag][key]).to.equal(
                    "undefined",
                    `duplicate root address: ${token.extensions.rootAddress} - polpularTokens list`
                );
                map[tag][key] = true;
            }
        }
        map = { pos: {}, plasma: {} };
        for (const token of tokenlists.testnetTokenList.tokens) {
            if (
                token.extensions.rootAddress.toLowerCase() !=
                "0x0000000000000000000000000000000000000000"
            ) {
                const tag = token.tags.includes("pos") ? "pos" : "plasma";
                const key = `${token.extensions.rootAddress.toLowerCase()}`;
                expect(typeof map[tag][key]).to.equal(
                    "undefined",
                    `duplicate root address: ${token.extensions.rootAddress} - testnet list`
                );
                map[tag][key] = true;
            }
        }
        map = { pos: {}, plasma: {} };
        for (const token of tokenlists.blacklistTokenList.tokens) {
            if (
                token.extensions.rootAddress.toLowerCase() !=
                "0x0000000000000000000000000000000000000000"
            ) {
                const tag = token.tags.includes("pos") ? "pos" : "plasma";
                const key = `${token.extensions.rootAddress.toLowerCase()}`;
                expect(typeof map[tag][key]).to.equal(
                    "undefined",
                    `duplicate root address: ${token.extensions.rootAddress} - blacklist token list`
                );
                map[tag][key] = true;
            }
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
