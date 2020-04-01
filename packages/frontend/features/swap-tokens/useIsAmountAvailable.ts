import CompoundPositions from "../../containers/CompoundPositions";

const useIsAmountAvailable = (
  amount: string,
  tokenStr: string,
  thingToSwap: string,
) => {
  const { compoundPositions } = CompoundPositions.useContainer();

  const tokenBalance = compoundPositions[tokenStr];

  // balances not yet loaded
  if (!tokenBalance) {
    return { isAmountAvailable: false };
  }

  if (thingToSwap === "debt") {
    const result = parseFloat(amount) < parseFloat(tokenBalance.borrow);
    return { isAmountAvailable: result };
  }
  const result = parseFloat(amount) < parseFloat(tokenBalance.supply);
  return { isAmountAvailable: result };
};

export default useIsAmountAvailable;