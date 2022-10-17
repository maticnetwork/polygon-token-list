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

## Adding a token

To add a token to the list, please 
[file an issue](https://github.com/maticnetwork/polygon-token-list/issues/new?assignees=&labels=add+token+request&template=add_token_request.md&title=Add+%7BTOKEN_SYMBOL%7D%3A+%7BTOKEN_NAME%7D).

## Updating a token

To update a token in the list, please 
[file an issue](https://github.com/maticnetwork/polygon-token-list/issues/new?assignees=&labels=update+token+request&template=update_token_request.md&title=Update+%7BTOKEN_SYMBOL%7D%3A+%7BTOKEN_NAME%7D).

### Disclaimer

After filing an issue, please allow us some time to verify the issue's authenticity.
We do not follow any particular order in reviewing token additions and updations.
