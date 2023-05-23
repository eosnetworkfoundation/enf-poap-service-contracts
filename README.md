# Contract repo for the ENF POAP Service

This project contains the smart contracts that are used by the ENF POAP Service. There is an example hello world smart contracts with a simple test and deploy script. These can be used as examples for future work.

Some useful commands you will need for smart contract development.

To compile your smart contracts:

```
npx hardhat compile
```

To run all the tests:
```
npx hardhat test
```

To run a specific test (example HelloWorld test): 
```
npx hardhat test test/HelloWorld.ts
```
To deploy a contracts:

  deploying to testnet
```
npx hardhat run --network eosevm_testnet scripts/00_Deploy_HelloWorld.ts
```
  deploying to mainnet
```
npx hardhat run --network eosevm scripts/00_Deploy_HelloWorld.ts
```

Verify contract: TBD

