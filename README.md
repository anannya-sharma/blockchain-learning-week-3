# blockchain-learning-week-3

## Progress

The project started with the development of an enhanced version of the ERC-20 token named "AdvancedToken". The token has additional features such as timed lock, mintability, and burnability. The project also includes the conceptualization of a decentralized banking platform where users can deposit traditional ERC-20 tokens and get an equivalent amount of "AdvancedToken" in return, lend their "AdvancedToken" to earn interest, and borrow against their "AdvancedToken" holdings.

## Challenges Encountered

1. **Understanding the Requirements:** The initial challenge was to understand the requirements and functionalities of the "AdvancedToken". It was crucial to understand how the timed lock, mintability, and burnability features work in the context of the ERC-20 token standard.

2. **Implementing the Features:** Implementing the features of the "AdvancedToken" required a good understanding of Solidity and the OpenZeppelin library. It was challenging to ensure that the features work correctly and securely.

3. **Writing Tests:** Writing tests for the "AdvancedToken" contract was another challenge. It was important to cover all possible scenarios to ensure the contract works as expected.

4. **Debugging:** Debugging the contracts was a challenging task. One of the bugs encountered was that users were able to burn tokens even if tokens were locked. Identifying the cause of the bug and fixing it required a deep understanding of the contract and the Solidity language.

## Insights Gained

1. **Solidity Programming:** This project provided a great opportunity to learn and practice Solidity programming. It helped in understanding the nuances of the language and how to use it to write secure and efficient smart contracts.

2. **ERC-20 Token Standard:** The project provided a deep understanding of the ERC-20 token standard and how to extend it to add additional features.

3. **Testing and Debugging:** Writing tests and debugging the contracts provided insights into the importance of thorough testing in smart contract development. It also helped in understanding how to effectively debug contracts and fix issues.

4. **Decentralized Finance (DeFi):** Conceptualizing a decentralized banking platform provided insights into the world of DeFi. It helped in understanding how DeFi platforms work and how they can provide financial services in a decentralized manner.

## Requirements

To run this project, you will need:

- Node.js
- npm (comes with Node.js)
- Hardhat
- Ethereum development environment

## Installation

1. Clone the repository.
2. Install the dependencies by running `npm install`.
3. Compile the contracts by running `npx hardhat compile`.
4. Run the tests by running `npx hardhat test`.

## Usage

The project includes the following smart contracts:

- `AdvancedToken.sol`: This is the main contract for the "AdvancedToken". It includes features such as timed lock, mintability, and burnability.

The project also includes the following scripts:

- `deploy.js`: This script deploys the "AdvancedToken" contract onto the Hardhat Network.
- `AdvancedToken.test.js`: This script includes unit tests for the "AdvancedToken" contract.
