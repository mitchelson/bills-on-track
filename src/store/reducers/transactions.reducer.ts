import { BillDTO } from "../../types";
import * as keys from "../constants/transactions";
import * as user from "../constants/user";
import { InitialStateTransactions } from "../types";

export const initialState: InitialStateTransactions = {
  balance: 0,
  allTransactions: {}
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
      const actionTransaction = action.payload as BillDTO;
      return {
        ...state,
        allTransactions: {
          ...(state.allTransactions || {}),
          [actionTransaction.monthTransaction]: {
            ...(state.allTransactions[actionTransaction.monthTransaction] || {}),
            [actionTransaction.paymentDate]: {
              ...(state?.allTransactions[actionTransaction.monthTransaction] ? state?.allTransactions[actionTransaction.monthTransaction][actionTransaction.paymentDate] || {} : {}),
              [actionTransaction.id]: { ...actionTransaction }
            }
          }
        }
      } as InitialStateTransactions;
    }
    case keys.DELETE_TRANSACTION: {
      const newTransactions = state.allTransactions;
      delete newTransactions[action.payload];
      return { ...state, allTransactions: newTransactions };
    }
    case keys.DELETE_ALL_TRANSACTION: {
      return { balance: 0, allTransactions: {} };
    }
    case keys.UPDATE_TRANSACTION: {
      return {
        ...state,
        allTransactions: {
          ...state.allTransactions,
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
