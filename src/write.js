const fs = require("fs");
const buildList = require("./build");
const listRegistry = require("./listRegistry.json");

const tokenlists = buildList();

// Aggregated List
fs.writeFile(
    "build/tokenlists/polygon.tokenlist.json",
    JSON.stringify(tokenlists.allPolygonTokenList, null, 2),
    (err) => {
        if (err) {
            throw err;
        }
        console.log("polygon.tokenlist.json successfully built");
    }
);

// Aggregated Popular List
fs.writeFile(
    "build/tokenlists/polygonPopular.tokenlist.json",
    JSON.stringify(tokenlists.allPolygonPopularTokenList, null, 2),
    (err) => {
        if (err) {
            throw err;
        }
        console.log("polygonPopular.tokenlist.json successfully built");
    }
);

// Aggregated Testnet List
fs.writeFile(
    "build/tokenlists/polygonTestnet.tokenlist.json",
    JSON.stringify(tokenlists.allPolygonTestnetTokenList, null, 2),
    (err) => {
        if (err) {
            throw err;
        }
        console.log("polygonTestnet.tokenlist.json successfully built");
    }
);

// Aggregated Testnet Popular List
fs.writeFile(
    "build/tokenlists/polygonTestnetPopular.tokenlist.json",
    JSON.stringify(tokenlists.allPolygonTestnetPopularTokenList, null, 2),
    (err) => {
        if (err) {
            throw err;
        }
        console.log("polygonTestnetPopular.tokenlist.json successfully built");
    }
);

// All Tokens Tokenlist
fs.writeFile(
    "build/tokenlists/allTokens.tokenlist.json",
    JSON.stringify(tokenlists.polygonTokensTokenList, null, 2),
    (err) => {
        if (err) {
            throw err;
        }
        console.log("allTokens.tokenlist.json successfully built");
    }
);

fs.writeFile(
    "build/tokenlists/polygonTokens.tokenlist.json",
    JSON.stringify(tokenlists.polygonTokensTokenList, null, 2),
    (err) => {
        if (err) {
            throw err;
        }
        console.log("polygonTokens.tokenlist.json successfully built");
    }
);

// Default Tokenlist
fs.writeFile(
    "build/tokenlists/default.tokenlist.json",
    JSON.stringify(tokenlists.popularTokenList, null, 2),
    (err) => {
        if (err) {
            throw err;
        }
        console.log("default.tokenlist.json successfully built");
    }
);

fs.writeFile(
    "build/tokenlists/popularTokens.tokenlist.json",
    JSON.stringify(tokenlists.popularTokenList, null, 2),
    (err) => {
        if (err) {
            throw err;
        }
        console.log("popularTokens.tokenlist.json successfully built");
    }
);

//zkEVM Popular Tokenlist
fs.writeFile(
    "build/tokenlists/zkevmPopular.tokenlist.json",
    JSON.stringify(tokenlists.zkevmPopularTokenList, null, 2),
    (err) => {
        if (err) {
            throw err;
        }
        console.log("zkevmPopular.tokenlist.json successfully built");
    }
);

// Testnet Tokenlist
fs.writeFile(
    "build/tokenlists/testnet.tokenlist.json",
    JSON.stringify(tokenlists.testnetTokenList, null, 2),
    (err) => {
        if (err) {
            throw err;
        }
        console.log("testnet.tokenlist.json successfully built");
    }
);

// Cross-Chain Tokenlist
fs.writeFile(
    "build/tokenlists/cross-chain.tokenlist.json",
    JSON.stringify(tokenlists.ccTokenList, null, 2),
    (err) => {
        if (err) {
            throw err;
        }
        console.log("cross-chain.tokenlist.json successfully built");
    }
);

// Staging Tokenlist
fs.writeFile(
    "build/tokenlists/staging.tokenlist.json",
    JSON.stringify(tokenlists.stagingTokenList, null, 2),
    (err) => {
        if (err) {
            throw err;
        }
        console.log("staging.tokenlist.json successfully built");
    }
);

// Blacklist Tokenlist
fs.writeFile(
    "build/tokenlists/blacklist.tokenlist.json",
    JSON.stringify(tokenlists.blacklistTokenList, null, 2),
    (err) => {
        if (err) {
            throw err;
        }
        console.log("blacklist.tokenlist.json successfully built");
    }
);

// List Registery
fs.writeFile(
    "build/listRegistry.json",
    JSON.stringify(listRegistry, null, 2),
    (err) => {
        if (err) {
            throw err;
        }
        console.log("listRegistry.json successfully built");
    }
);
