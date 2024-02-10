1. **TokenSwap Contract:** This contract will handle the swapping of traditional ERC-20 tokens to "AdvancedToken".

   - **depositTokens:** Users can deposit their traditional ERC-20 tokens into this contract and receive an equivalent amount of "AdvancedToken" in return.
   - **withdrawTokens:** Users can also withdraw their traditional ERC-20 tokens by returning the equivalent amount of "AdvancedToken".

2. **LendingPool Contract:** This contract will manage the lending of "AdvancedToken" to earn interest.

   - **lendTokens:** Users can lend their "AdvancedToken" to the lending pool. The tokens will be locked in the contract until they are withdrawn.
   - **calculateInterest:** This function will calculate the interest earned on the lent tokens based on the duration and the interest rate.
   - **withdrawInterest:** Users can withdraw their earned interest.

3. **Loan Contract:** This contract will handle the borrowing of "AdvancedToken".
   - **borrowTokens:** Users can borrow "AdvancedToken" against their holdings. The borrowed amount will be less than or equal to a certain percentage of their holdings to avoid insolvency.
   - **calculateLoanInterest:** This function will calculate the interest on the loan based on the duration and the interest rate.
   - **repayLoan:** Users can repay their loan along with the interest. If the loan is not repaid within the specified duration, the contract will automatically deduct the amount from the user's holdings.

These contracts will interact with each other and the "AdvancedToken" contract to provide a seamless user experience. For instance, when a user deposits traditional ERC-20 tokens into the TokenSwap contract, the contract will interact with the "AdvancedToken" contract to mint the equivalent amount of "AdvancedToken". Similarly, when a user lends "AdvancedToken" through the LendingPool contract, the contract will interact with the "AdvancedToken" contract to lock the lent tokens.
