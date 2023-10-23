import keyAccount from "../constants/accounts";

type SetBalanceProps = {
  accountId: string;
  newBalance: number;
}

export const setBalance = (props: SetBalanceProps) => {
  return (dispatch: ({ type, payload }: { type: string, payload: any }) => void) => {
    dispatch({ type: keyAccount.SET_BALANCE, payload: props });
  };
}
