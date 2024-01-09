const polygonTokens = require("./tokens/polygonTokens.json");
const popularTokens = require("./tokens/popularTokens.json");
const testnetTokens = require("./tokens/testnetTokens.json");
const blacklistTokens = require("./tokens/blacklistTokens.json");
const zkevmPopularTokens = require("./tokens/zkevmPopularTokens.json");
const allPolygonTokens = require("./tokens/polygon.json");
const allPolygonTestnetTokens = require("./tokens/polygonTestnet.json");
const allPolygonPopularTokens = require("./tokens/polygonPopular.json");
const allPolygonTestnetPopularTokens = require("./tokens/polygonTestnetPopular.json");
const v2PopularTokens = require("./tokens/defaultTokens.json");
const v2MappedTokens = require("./tokens/mappedTokens.json");
const polygonTokensTokenList = require("./metadata/polygonTokens.json");
const popularTokenList = require("./metadata/popularTokens.json");
const testnetTokenList = require("./metadata/testnetTokens.json");
const blacklistTokenList = require("./metadata/blacklistTokens.json");
const zkevmPopularTokenList = require("./metadata/zkevmPopularTokens.json");
const allPolygonTokenList = require("./metadata/polygon.json");
const allPolygonTestnetTokenList = require("./metadata/polygonTestnet.json");
const allPolygonPopularTokenList = require("./metadata/polygonPopular.json");
const allPolygonTestnetPopularTokenList = require("./metadata/polygonTestnetPopular.json");
const v2PopularTokenList = require("./metadata/defaultTokens.json");
const v2MappedTokenList = require("./metadata/mappedTokens.json");

// Staging list
const stagingTokenList = JSON.parse(JSON.stringify(polygonTokensTokenList));
stagingTokenList.name = "Polygon Staging List";
const stagingList = [polygonTokens[0], polygonTokens[1], polygonTokens[2]];

// Remove the project information from lists
allPolygonTokens.forEach((token) => {
    delete token.extensions.project;
});

allPolygonPopularTokens.forEach((token) => {
    delete token.extensions.project;
});

polygonTokens.forEach((token) => {
    delete token.extensions.project;
});

popularTokens.forEach((token) => {
    delete token.extensions.project;
});

module.exports = function buildList() {
    const timestamp = new Date().toISOString();

    Object.assign(v2PopularTokenList, {
        timestamp,
        tokens: v2PopularTokens,
    }); // v2 Default List
    Object.assign(v2MappedTokenList, {
        timestamp,
        tokens: v2MappedTokens,
    }); //v2 Mapped List

    Object.assign(allPolygonTokenList, { timestamp, tokens: allPolygonTokens }); // Aggregated Polygon Tokens List
    Object.assign(allPolygonPopularTokenList, {
        timestamp,
        tokens: allPolygonPopularTokens,
    }); // Aggregated Polygon Popular Tokens List
    Object.assign(allPolygonTestnetTokenList, {
        timestamp,
        tokens: allPolygonTestnetTokens,
    }); // Aggregated Polygon Testnet Tokens List
    Object.assign(allPolygonTestnetPopularTokenList, {
        timestamp,
        tokens: allPolygonTestnetPopularTokens,
    }); // Aggregated Polygon Testnet Popular Tokens List
    Object.assign(polygonTokensTokenList, { timestamp, tokens: polygonTokens }); // PolygonTokens tokenlist
    Object.assign(popularTokenList, { timestamp, tokens: popularTokens }); // popular tokenlist
    Object.assign(zkevmPopularTokenList, {
        timestamp,
        tokens: zkevmPopularTokens,
    }); // zkevm popular tokenlist
    Object.assign(testnetTokenList, { timestamp, tokens: testnetTokens }); // Testnet tokenlist
    Object.assign(blacklistTokenList, { timestamp, tokens: blacklistTokens }); // blacklist tokenlist
    Object.assign(stagingTokenList, { timestamp, tokens: stagingList }); // Staging Tokenlist

    return {
        allPolygonTokenList,
        allPolygonPopularTokenList,
        allPolygonTestnetTokenList,
        allPolygonTestnetPopularTokenList,
        polygonTokensTokenList,
        popularTokenList,
        zkevmPopularTokenList,
        testnetTokenList,
        blacklistTokenList,
        stagingTokenList,
        v2PopularTokenList,
        v2MappedTokenList,
    };
};
