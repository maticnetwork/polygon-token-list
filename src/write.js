const fs = require("fs");
const buildList = require("./build");
const listRegistry = require("./listRegistry.json");

const tokenlists = buildList();

// v2 Popular List
fs.writeFile(
    "build/tokenlists/popular.tokenlist.json",
    JSON.stringify(tokenlists.v2PopularTokenList, null, 2),
    (err) => {
        if (err) {
            throw err;
        }
        console.log("popular.tokenlist.json successfully built");
    }
);

// v2 Mapped List
fs.writeFile(
    "build/tokenlists/mapped.tokenlist.json",
    JSON.stringify(tokenlists.v2MappedTokenList, null, 2),
    (err) => {
        if (err) {
            throw err;
        }
        console.log("mapped.tokenlist.json successfully built");
    }
);

// v2 Popular Testnet List
fs.writeFile(
    "build/tokenlists/popularTestnet.tokenlist.json",
    JSON.stringify(tokenlists.v2PopularTestnetTokenList, null, 2),
    (err) => {
        if (err) {
            throw err;
        }
        console.log("popularTestnet.tokenlist.json successfully built");
    }
);

// v2 Mapped Testnet List
fs.writeFile(
    "build/tokenlists/mappedTestnet.tokenlist.json",
    JSON.stringify(tokenlists.v2MappedTestnetTokenList, null, 2),
    (err) => {
        if (err) {
            throw err;
        }
        console.log("mappedTestnet.tokenlist.json successfully built");
    }
);

// v2 Mapped Testnet New List
fs.writeFile(
    "build/tokenlists/mappedTestnetNew.tokenlist.json",
    JSON.stringify(tokenlists.v2MappedTestnetNewTokenList, null, 2),
    (err) => {
        if (err) {
            throw err;
        }
        console.log("mappedTestnetNew.tokenlist.json successfully built");
    }
);

// v2 Popular Testnet New List
fs.writeFile(
    "build/tokenlists/popularTestnetNew.tokenlist.json",
    JSON.stringify(tokenlists.v2PopularTestnetTokenListNew, null, 2),
    (err) => {
        if (err) {
            throw err;
        }
        console.log("popularTestnetNew.tokenlist.json successfully built");
    }
);

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

// Staging Tokenlist
fs.writeFile(
    "build/tokenlists/staging.tokenlist.json",
    JSON.stringify(tokenlists.v2PopularTokenListStaging, null, 2),
    (err) => {
        if (err) {
            throw err;
        }
        console.log("staging.tokenlist.json successfully built");
    }
);

fs.writeFile(
    "build/tokenlists/mappedStaging.tokenlist.json",
    JSON.stringify(tokenlists.v2MappedTokenListStaging, null, 2),
    (err) => {
        if (err) {
            throw err;
        }
        console.log("mappedStaging.tokenlist.json successfully built");
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
