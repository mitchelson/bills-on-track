import keys from "../constants/accounts";
import { InitialStateAccounts } from "../types";

export const initialState: InitialStateAccounts = {
  accounts: {
    "defaultAccount": {
      balance: 0,
      image: "",
      name: "Conta principal"
    }
  },
};

type ActionProps = {
  type: "SET_BALANCE";
  payload: any;
} | {
  type: "DELETE_ACCOUNT";
  payload: string
}


const accounts = (state = initialState, action: ActionProps) => {
  switch (action.type) {
    case keys.SET_BALANCE: {
      return {
        ...state,
        account: {
          ...state.accounts,
          [action.payload.accountId]: {
            ...state.accounts[action.payload.accountId],
            balance: action.payload.balance
          }
        }
      };
    }
    case keys.DELETE_ACCOUNT: {
      return action.payload;
    }
    default: {
      return state;
    }
  }
};

export default accounts;
