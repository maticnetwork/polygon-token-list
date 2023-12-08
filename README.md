# Tokenlists

This repo contains lists of tokens mapped to the Polygon chains that may be used in certain interfaces.

## Different Token Lists in JSON

The JSON schema for the tokens includes: chainId, name, address, decimals, symbol, logoURI (optional), tags (optional), and custom extensions metadata.

1. [Mapped Tokens List](https://api-polygon-tokens.polygon.technology/tokenlists/polygon.tokenlist.json) Contains tokens that are mapped to Polygon PoS and Polygon zkEVM. Anyone can propose updates to this list.

2. [Popular Tokens List](https://api-polygon-tokens.polygon.technology/tokenlists/polygonPopular.tokenlist.json) Contains the top 100 most used tokens on the Polygon chains.

3. [Testnet Tokens List](https://api-polygon-tokens.polygon.technology/tokenlists/polygonTestnet.tokenlist.json) contains the tokens mapped on the Mumbai chain.

4. [Blacklist Tokens List](https://api-polygon-tokens.polygon.technology/tokenlists/blacklist.tokenlist.json) Contains tokens that have been flagged for issues.

## Adding or Updating a token

1. Fork the repository

2. Add the new token at the end of the token array in `src/tokens/polygonTokens.json`

    Please make sure that the new token follows this schema.

    ```json
    {
        "chainId": 137, // Chain Id of the L2 chain
        "name": "token_name",
        "symbol": "token_symbol",
        "decimals": "<token_decimals>",
        "address": "token_address on Polygon",
        "logoURI": "token_icon_uri",
        "tags": ["<bridge>", "<token_type>", "<optional_tag>", "<optional_tag>", ...], // For all acceptable tags, check the below list
        "extensions": {
            "originTokenAddress": "token_address on the origin chain", // If not deployed on ethereum, add noDeposit and noWithdraw tags
            "originTokenNetwork": "id of the token's origin chain", // Use 0 for Ethereum, 1 for zkEVM, -1 for PoS
            "wrappedTokenNetwork": "id of the wrapper token's chain", // Only for tokens bridged via LxLy bridge (zkEVM)
            "project": {
                "name": "Project_Name",
                "summary": "Short_Project_Description",
                "contact": "Project_Support",
                "website": "Project_Website"
            },
            "originChainBridgeAdapter": "Bridge adapter contract address on origin chain", // Only required for tokens bridged using zkEVM messaging layer
            "wrapperChainBridgeAdapter": "Bridge adapter contract address on wrapper chain" // Only required for tokens bridged using zkEVM messaging layer
        }
    }
    ```

    ### Tags

    1. `stablecoin`: Tokens that are pegged to a fiat asset, e.g. USDC, USDT

    2. `swapable`: Tokens are eligible for swapping through the 0x contracts

    3. `native`: Tokens are native tokens of the chain

    4. `erc20`: Tokens are of ERC20 token type

    5. `pos`: Tokens that are bridged using the PoS bridge
       Note: Also use this tag if the tokens cannot be bridged.

    6. `fx`: Tokens that are bridged using the FX or custom FX bridge

    7. `plasma`: Tokens that are bridged using the PLASMA bridge

    8. `lxly`: Tokens that are bridged using the LxLy bridge (zkEVM)

    9. `metaTx`: Tokens are eligible for meta transactions
       Note: Use this tag if the tokens support meta transactions and can be used for a gasless swaps.

    10. `customSig`: The token has its custom withdraw event signature and does not depend on the transfer event signature while verifing withdrawals

    11. `noDeposit`: Tokens are not eligible for deposits from Ethereum
        Note: Also use this tag if the tokens cannot be bridged.

    12. `noWithdraw`: Tokens are not eligible for withdrawals back to Ethereum
        Note: Also use this tag if the tokens cannot be bridged.

    13. `customZkevmBridge`: Tokens that are bridged using zkEVM messaging layer

3. Run linter and fix the issues if any

    ```bash
    npm run lint
    ```

    ```bash
    npm run lint:fix
    ```

4. Make sure that the tests are passing and the tokenlist builds

    ```bash
    npm run test
    ```

    ```bash
    npm run build
    ```

5. Commit the changes and raise a Pull request to our repo's dev branch

### Disclaimer

After raising a PR, please allow us some time to verify the PR.
We do not follow any particular order in reviewing token additions and updations.
