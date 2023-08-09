import * as keys from "../constants/transactions";
import * as user from "../constants/user";
import { InitialStateTransactions } from "../types";

export const initialState: InitialStateTransactions = {
  balance: 0,
  transactions: {}
};

const transactions = (state = initialState, action: any) => {
  switch (action.type) {
    case keys.SET_BALANCE: {
      return {
        ...state,
        balance: action.payload
      };
    }
    case keys.CREATE_NEW_TRANSACTION: {
      return {
        ...state,
        transactions: {
          ...transactions,
          [action.id]: { ...action.payload }
        }
      };
    }
    case keys.DELETE_TRANSACTION: {
      const newTransactions = state.transactions;
      delete newTransactions[action.payload];
      return { ...state, transactions: newTransactions };
    }
    case keys.UPDATE_TRANSACTION: {
      return {
        ...state,
        transactions: {
          ...transactions,
          [action.payload.id]: { ...action.payload }
        }
      };
    }
    case user.DELETE_USER_DATA: {
      return initialState;
    }
    default: {
      return state;
    }
  }
};

export default transactions;
