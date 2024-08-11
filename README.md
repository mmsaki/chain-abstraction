# Chain Abstraction

Project Name: **Siera** - An explorer for the Superchain with ERC3770 Chain-specific addresses search and support for ERC7683 Cross-Chain Trade Execution Systems.

- [ERC3770](https://eips.ethereum.org/EIPS/eip-3770)
- [ERC7683](https://eips.ethereum.org/EIPS/eip-7683)
- Other

  - Block Explorer API Routes [EIP-3091](https://eips.ethereum.org/EIPS/eip-3091)

- Live Demo
  - https://siera.cc

## Getting Started

First, install dependencies

```sh
bun install
```

## Run Test

```sh
bun test
```

## Smart Account Address

Let's run this code with npm.

```sh
bun run smartAccountAddress
```

You should see the smart account address printed to the console.

```sh
Smart account address: https://{chain}.blockscout.com/address/{address}
```

If the request times out but the `pimlico.js` file has already been compiled to `pimlico.js`

```sh
node dist/pimlico.js
```

## Start Project

Run this to start a server at `http://localhost:3000`

```sh
bun run dev
```

Create deployment build

```sh
bun run build
```

## Features

- Our goal is to support cross-chain L2 - L2 trade and transfers execution through ERC7683 support and we exclusively uses ERC3770 chain-specific address as a UX improvement for creating transfers a opposed other methods to changing chains and addresses on the transfer UI.
- We test this concept by also deploying a L3 on top of Mode Sepolia L2.
  - This is a perfect use case for the need for readable ERC3770 address and using ERC7683 standards for cross-chain transfers.
- We provide a simple search tool and use demonstrated with example of MetalL2 search with simple UX of ERC3770 address
- We read and work with data following the the Superchain Token List resources
  - https://static.optimism.io/
- Using API from Across protocol we obtain many more tokens combination transfer and trading routes between OPStack chains including those routing to L1.
  - Example you can deposit USDC on L1 but receive ETH on L2 or L3 or another token depending on the routes
- We support log in with passkeys
- We also attempt uto se Farcaster for Log in - https://siera.cc/account
- This superhack attempts to also combine account abstraction and chain abstraction in addition to the ERC3770 and ERC7683 work.
- We also used Blockscout to verify our L3 Gas Token contract on Mode Sepolia and access many chain explorers they provide
- The secret source that I didn't implement AI with a _transfer learning_ model of ~ 10mb in the browser, that I can used on search voice and use video frames do enhance the experience of search.

## ERC7683 Base L2 to Mode L2 Transfer

**Onchain transactions:**

- L2 Deposit: https://base.blockscout.com/tx/0x9a38d2ded120017328411dc9290d3c2f3886156b2c4190d0b5fd27672c407890

  - Amount: $0.257272
  - Gas: $0.00562

- L2 Fill: https://explorer.mode.network/tx/0x10c90594638e230b99c3c400402227e9a8c750ee617290c9e8fda61e649ee119

![](./public/L2L2Transfer.png)

## Mode L2 to Custom Siera L3 Chain Transfer

**Onchain transactions:**

- Native Token - [https://sepolia.explorer.mode.network/address/0x76379783717d3aBA4da7A712C5996cB9Fe468F03?tab=contract](https://sepolia.explorer.mode.network/address/0x76379783717d3aBA4da7A712C5996cB9Fe468F03?tab=contract)

  - Deployed and contract verified with Blockscout
  - Deploy Setup: [https://github.com/mmsaki/chain-abstraction/commit/43ffaf63b551a39653f6691f53e13ad4f7999c59](https://github.com/mmsaki/chain-abstraction/commit/43ffaf63b551a39653f6691f53e13ad4f7999c59)
  - Foundry Script Runs: [https://github.com/mmsaki/chain-abstraction/commit/0cf6c4a8b1779717d393dfb122a0886203c99aed](https://github.com/mmsaki/chain-abstraction/commit/0cf6c4a8b1779717d393dfb122a0886203c99aed)

- L3 Explorer: [https://explorer-siera-17xzc7awfe.t.conduit.xyz/address/0x04655832bcb0a9a0bE8c5AB71E4D311464c97AF5](https://explorer-siera-17xzc7awfe.t.conduit.xyz/address/0x04655832bcb0a9a0bE8c5AB71E4D311464c97AF5)

  - Deployed with Conduit
  - We Deployed two L3 chains on Mode Sepolia with the same gas token
    - Chain one: **chainId**: 770, **Withdrawal Period**: 60 secs 1 minute
    - Chain two: **chainId**: 810, **Withdrawal Period**: 604,800 secs ~ 7 days

- BridgingToCustomL3: [https://explorer-siera-17xzc7awfe.t.conduit.xyz/tx/0x9793d9bc4144b30aa02b7492afd7864ecf57c7dcc005b2471549e13655e6448e](https://explorer-siera-17xzc7awfe.t.conduit.xyz/tx/0x9793d9bc4144b30aa02b7492afd7864ecf57c7dcc005b2471549e13655e6448e)

  - L3 fees paid in custom Gas Token token with 7 day confirmation period
