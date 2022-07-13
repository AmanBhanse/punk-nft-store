# Punk NFT Store

## Project demo

Click below to watch demo video

[![Punk NFT Store](https://img.youtube.com/vi/pc414kDi6cE/0.jpg)](https://www.youtube.com/watch?v=pc414kDi6cE)

## How to run project

follow the instructions below in sequence. (By default it will show my NFTs collection)

- Clone the repository
- run command : `npm i`
- run command : `npm start run`

## Technologies used

- React (Frontend)
- Thirdweb (Web3 : NFTs)

## Folder structure

Inside `./src`

- `src/components` : Pure components
  - component's view and business logic is written in `.js` or `.jsx`. Example : `src/components/CollectionCard.js`
  - component's styling is written in `scss`. Example: `src\components\CollectionCard.scss`
- `src/containers` : components which acts as container for pure components
- `src/cred` : JSON files which contains data for wallet and owner info

## How to show your own NFT Collection.

Prerequisite

- You will need one cryptocurrency wallet like "Meta Mask"

Steps :

- Create/Sign-in to [Third Web](https://thirdweb.com/) and connect your cryptocurrency wallet. (Example: I have connected my Meta Mask wallet to Third web account)

- In order to create the NFTs, you will need crytocurrency. For this project will use fake cryto. To use the **fake cryto** you should first do the following.

  - In your wallet set Network to `Rinkeby Test Network`
  - Open brower, go to [Faucets](https://faucets.chain.link/rinkeby).
    - Inside `Testnet account address`, input your wallet address. Example : "0x67xxxxxxxxxxxxxxx".
    - Request type : **check** 0.1 test ETH (**uncheck** `test LINK` box)
    - Click on `Send Request` (This will take some time)

- Once you get your fake cryto then in Third web's dashboard create NFT Collections. while creating the collection it will ask for `gas fees`, since you have fake cryto, when hit create collection, check your wallet, it would be requesting cryto and you should allow transaction.

- Once you setup the NFT Collection Project in Thrid web. Mint the NFT and also set price of your NFT in `property` section like `price` : `20`. Once you filled all the details then click on "Mint NFT" and it will ask for gas fee, so check your wallet and allow the transation. Once Minting is completed then you will notice new row is added inside your NFT collection.Similarly you can mint more NFTs

- Now, inside Third web, inside your NFT Collection, copy the `contact address` (I am not reffering to wallet address) and go inside `src/cred/walletConfig.json` and set your contact address as value for key `contactAddress` (Please check out project demo video (mentioned above), there I have shown where you can find the contact address in thrid web) . (By default its my contact address that's why it is showing my NFTs)

- Finally, in project's root terminal, run `npm start run`.
