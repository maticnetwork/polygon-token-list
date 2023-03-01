# polygon-token-list

This repo contains the token lists to be used in Polygon products' interfaces.

## Different Token Lists in JSON

the JSON schema for the tokens includes: chainId, name, address, decimals, symbol, logoURI (optional), tags (optional), and custom extensions metadata.

There are two token lists that we are maintaining currently on mainet and another one on testnet:

1. [Polygon Tokens List](https://api-polygon-tokens.polygon.technology/tokenlists/polygonTokens.tokenlist.json) contains all the tokens added by the community that are mapped on the Polygon PoS chain. The community can raise token addition and updation issues to help us keep the token list up-to-date.

2. [Popular Tokens List](https://api-polygon-tokens.polygon.technology/tokenlists/popularTokens.tokenlist.json) is a subset of the allTokens list. It contains the mostly used tokens on Polygon Wallet Web.

3. [Testnet Tokens List](https://api-polygon-tokens.polygon.technology/tokenlists/testnet.tokenlist.json) contains the tokens mapped on the Mumbai chain.

Apart from these 3 token list there is one blacklisted token list:

1. [Blacklist Tokens List](https://api-polygon-tokens.polygon.technology/tokenlists/blacklist.tokenlist.json) contains all the blacklisted tokens which should be filtered out from the UI.

## Adding or Updating a token

1. Fork the repository

2. Add the new token at the end of the token array in `src/tokens/polygonTokens.json`

    Please make sure that the new token follows this schema.

    ```json
    {
        "chainId": 137, // Should always be 137
        "name": "token_name",
        "symbol": "token_symbol",
        "decimals": <token_decimals>,
        "address": "token_address on Polygon",
        "logoURI": "token_icon_uri",
        "tags": ["<bridge>", "<token_type>", "<optional_tag>", "<optional_tag>", ...], // For all acceptable tags, check below
        "extensions": {
            "rootAddress": "token_address on Ethereum", // If not deployed on ethereum, use "0x0000000000000000000000000000000000000000" and add noDeposit and noWithdraw tags
            "project": {
                "name": "Project_Name",
                "summary": "Short_Project_Description",
                "contact": "Project_Support",
                "website": "Project_Website"
            }
        }
    }
    ```

    ### Tags

    1. `stablecoin`: Tokens that are pegged to a fiat asset, e.g. USDC, USDT

    2. `swapable`: Tokens are eligible for swapping through the 0x contracts

    3. `erc20`: Tokens are of ERC20 token type

    4. `pos`: Tokens can be bridged from Ethereum using the PoS bridge
       Note: Also use this tag if the tokens cannot be bridged.

    5. `plasma`: Tokens can be bridged from Ethereum using the PLASMA bridge

    6. `metaTx`: Tokens are eligible for meta transactions
       Note: Use this tag if the tokens support meta transactions and can be used for a gasless swaps.

    7. `customWithdrawEventSig`: The token has its custom withdraw event signature and does not depend on the transfer event signature while verifing withdrawals

    8. `noDeposit`: Tokens are not eligible for deposits from Ethereum
       Note: Also use this tag if the tokens cannot be bridged.

    9. `noWithdraw`: Tokens are not eligible for withdrawals back to Ethereum
       Note: Also use this tag if the tokens cannot be bridged.

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
