# Chain Abstraction

Praject Name: **Siera** - An explorer for the Superchain with ERC3770 Chain-specific Addresses Search and support for ERC7683 Chain Abstraction transfer.

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

- Our goal provide transfer routing between multiple L2 - L2 transfers with ERC7683 support that exclusively uses ERC3770 chain-specific address for searching address and creating transfers.
- We extend this concept by also deploying a L3 on top of Mode L2. This is a perfect usecase for the need for readable ERC3770 address and using ERC7683 standards for token transfers.
- We provide a simple search tool and use demonstrated with MetalL2 search address.
- Using API from Across protocol we obtain many more tokens transfers routes between OPStack chains including those routing to L1.
- We support log in with passkeys.
- We also attempt use Farcaster for Log in - https://siera.cc/account
- This superhack attempts to also combine account abstraction and chain abstraction in addition to the ERC3770 and ERC7683 work.
- We also used Blockscout to verify contract of our L3 Gas Token on Mode Sepolia.

## ERC7683 Base L2 to Mode L2 Transfer

**Onchain transactions:**

- L2 Deposit: https://basescan.org/tx/0x9a38d2ded120017328411dc9290d3c2f3886156b2c4190d0b5fd27672c407890

- L2 Fill: https://explorer.mode.network/tx/0x10c90594638e230b99c3c400402227e9a8c750ee617290c9e8fda61e649ee119

![](./public/L2L2Transfer.png)

## Mode L2 to Custom Siera L3 Chain Transfer

**Onchain transactions:**

- Native Token - [https://sepolia.explorer.mode.network/address/0x76379783717d3aBA4da7A712C5996cB9Fe468F03?tab=contract](https://sepolia.explorer.mode.network/address/0x76379783717d3aBA4da7A712C5996cB9Fe468F03?tab=contract)

  - Deployed and contract verified with blockscout
  - Deploy Setup: [https://github.com/mmsaki/chain-abstraction/commit/43ffaf63b551a39653f6691f53e13ad4f7999c59](https://github.com/mmsaki/chain-abstraction/commit/43ffaf63b551a39653f6691f53e13ad4f7999c59)
  - FoundyScriptRuns: [https://github.com/mmsaki/chain-abstraction/commit/0cf6c4a8b1779717d393dfb122a0886203c99aed](https://github.com/mmsaki/chain-abstraction/commit/0cf6c4a8b1779717d393dfb122a0886203c99aed)

- L3 Explorer: [https://explorer-siera-17xzc7awfe.t.conduit.xyz/address/0x04655832bcb0a9a0bE8c5AB71E4D311464c97AF5](https://explorer-siera-17xzc7awfe.t.conduit.xyz/address/0x04655832bcb0a9a0bE8c5AB71E4D311464c97AF5)

  - Deployed with Conduit
  - We Deployed two L3 chains on Mode Sepolia with the same gas token 😱
    - Chain one: **chainId**: 770, **Withdrawal Period**: 60 secs 1 minute
    - Chain two: **chainId**: 810, **Withdrawal Period**: 604,800 secs ~ 7 days

- BridgingToCustomL3: [https://explorer-siera-17xzc7awfe.t.conduit.xyz/tx/0x9793d9bc4144b30aa02b7492afd7864ecf57c7dcc005b2471549e13655e6448e](https://explorer-siera-17xzc7awfe.t.conduit.xyz/tx/0x9793d9bc4144b30aa02b7492afd7864ecf57c7dcc005b2471549e13655e6448e)

  - L3 fees paid in cutom Gas Token token with 7 day confirmation period

<!--
- [ ] Displaying ~1.7k chains 😱
- [ ] Base
  - Build new and imaginative ways for onchain creativity to thrive with projects that help people create, discover, curate, and collect on Base.
  - To potentially qualify for a prize in this track, submissions should be live and usable by the community on Base.
  - Build a futuristic payments experience for users on Base. Anything that simplifies people's abilities to pay one another, we are excited to see!
- [ ] Metall2 Passkeys integration with Webauth
  - Deploy p-256 verifier on metall2-testnet
  - Awarded to the most outstanding project integrating passkeys with Metal L2 for enhanced security and user authentication.
  - Be live on Metal L2 Mainnet or Testnet and be available for users in the community to test.
- [ ] EIP-7212: Precompile for secp256r1 curve support for (P256Verify passkey signatures)
- [ ] EIP-3074: AUTH and AUTHCALL instructions (smart account)
- [ ] OP Stack deploy with conduit
- [ ] ERC3770 specific-chain address
- [ ] Goldsky superchain pipeline
  - Replicate Subgraph data or chain-level streams directly to a data store of your choosing for highly flexible usage in your front-end or back-end.
- [ ] Tenderly
  - Your README documents a functionality that we can try out (written or video), stressing the way
  - Your dapp is runnable. When we run the dapp and execute a functionality, we expect to see corresponding JSON RPC calls to the testnet.
  - Provide shell scripts that deploy your contracts to the Virtual TestNet, if you deploy contracts.
  - Your hack dazzles us with an innovative use of Virtual TestNets
  - Deploy smart contracts to the Virtual TestNet and integrate at least one off-chain component\* with a Virtual TestNet.
- [ ] Thirdweb
  - Deploy contracts with thirdweb
- [ ] Custom chain with conduit
  - Bridge tokens to a different chain
- [ ] Superform
  - Tokenized vault
- [ ] Alchemy
  - To qualify, this submission must be a React application using Alchemy Embedded Accounts
  - including the UI React Components ("@account-kit/react")
  - [Get Started](https://dashboard.alchemy.com/accounts) either Light Account or Modular Account
- [ ] Farcaster
  - The Farcaster Frame must be live in production to qualify and actions must trigger contract interactions onchain.
  - The onchain interactions must be on one of the Superchain ecosystem networks.
  - [ ] Turn your search component into a farcaster frame
    - [Farcaster tutorial](https://docs.farcaster.xyz/developers/frames/getting-started)
    - [Frog Platforms deploy another way](https://frog.fm/platforms/bun)
- [ ] Chainlink CCIP
  - You want to send cross-chain message from blockchain A to blockchain B without worrying if the lane between them exists.
  - [Documentation](https://docs.chain.link/ccip)
  - Build something awesome using Chainlink CCIP on Optimism or Base!
  - Each project must use Chainlink CCIP in some form to make a state change on a blockchain, otherwise it will not be eligible for the Chainlink core prizes.
- [ ] Blockscout
  - We have a REST API, GraphQL, and standardized RPC API endpoints available for use - no key required!
  - Verify your smart contract(s) using Blockscout manually with the Blockscout UI, via API, or with tools like Hardhat or Foundry.
  - Show Blockscout in your presentation - how you used it with your project and when checking any resulting transactions.
  - Prepare and submit your DApp which includes Blockscout links to the DAppscout marketplace.
- [ ] Mode
  - Artificial Intelligence (AI) is here to change a lot of industries, and at Mode we want to see creative uses of AI mixed with DeFi.
  - The AI implemented can also be integrated as a learning algorithm for your project.
  - Best AI: The contracts need to be deployed on Mode testnet or mainnet. If the app is multchain, Mode needs to be included and should make sense to have Mode in the list.
  - 🎨 Best UX/UI: Ease of Use: Ensure the interface is intuitive and easy to navigate.
  - The app needs to be deployed on Mode (it's smart contracts),
- [ ] Fraxtal
  - Deployment of the contracts on Fraxtal Mainnet and UI
  - Any applications/protocols that are deployed to Fraxtal mainnet with its token issued on Fraxtal are eligible for prizes.
- [ ] Conduit
  - We're awarding $10k in prizes to the 3 best OP Stack chains deployed on Conduit during Superhack 2024!
  - Use Pyth Entropy to generate and consume random number on chains.
  - Most Innovative use of Pyth pull oracle
    - Use Pyth pull oracle to power up you dapp.
    - Your app should use Pyth price feeds via Pull method.
      1. [Pull/Fetch the data from Hermes](https://ethglob.al/imnqw)
      1. Update the data on chain
      1. Consume the price
    - Please follow our comprehensive [Pyth EVM guide](https://docs.pyth.network/price-feeds/use-real-time-data/evm) to to integrate Pyth in less than 5 minutes
- [ ] EAS
  - It must generate attestations using existing or new schemas.
  - It’s a problem worth solving with blockchain that's better than existing systems and experiences.
  - Use the EAS contracts on Base or Optimism.
- [ ] Celo
  - Deploy on our new Cel2
    - Deploy your dApp on Alfajores and on Dango (Testnet)
    - Provide feedback on your development experience by filling out our feedback form
  - Use the Celo-Composer Starter Kit MiniPay template to have the correct setup
  - Deploy your contracts on Celo Alfajores Testnet or Celo Mainnet
  - Build a responsive web app that can be demoed within the MiniPay Site Tester
  - use viem or wagmi in the FE for interacting with smart contracts
  - Examples:
    - Utility: what APIs can you integrate to pay for everyday use cases, e.g., BitGifty
    - Personal Finance: Savings dApp focused on stablecoins. What makes your dapp especially useful, and attractive? Check out existing successful savings apps and dapps and understand how you can bring that to MiniPay.
- [ ] WorldCoin
  - Integrate Sign in with World ID or Incognito Actions
  - World ID must be fully integrated. Proof validation is required and needs to occur in a web backend or smart contract.
  - Gas Subsidy with World ID & Reth
    - You should deploy your own OP Stack Testnet for this prize.
    - This prize will be awarded to the best solution using World ID for gas subsidy chain-wide
    - The gas subsidy should not require any integration work for contracts or applications deployed on your chain
  - Transaction Priority with World ID & Reth
    - This prize will be awarded to the best solution using World ID for transaction priority with Reth.
  - Pool Prize
    - Projects must demonstrate a good-faith effort to integrate World ID or achieve one of Worldcoin's prize objectives to be eligible for the pool prize.
- [ ] Fork the OP Stack to win
  - Superchain Maxis
    - Anyone who submits to multiple OP Chains is eligible. The best 5 will win.
  - Vote!
    - Interfaces to improve gov interactions such as a grants monitoring UI
    - tooling that increases the resiliency of core governance infrastructures
  - Just [improve] it
    - Improve dev experience through tooling Ex.
      - (1) attestation deep-fake protection system,
      - (2) chain-agnostic network health dashboard -->
