import { BillDTO } from "../../types";
import * as keys from "../constants/transactions";
import * as user from "../constants/user";
import { InitialStateTransactions } from "../types";

export const initialState: InitialStateTransactions = {
  balance: 0,
  monthTransactions: {}
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
      const newObj = {
        ...state,
        monthTransactions: {
          ...state.monthTransactions,
          [action.payload.monthTransaction]: {
            ...state.monthTransactions[actionTransaction.monthTransaction],
            [actionTransaction.id]: { ...actionTransaction }
          }
        }
      };
      console.log("newObj => ", newObj)
      return newObj;
    }
    case keys.DELETE_TRANSACTION: {
      const newTransactions = state.monthTransactions;
      delete newTransactions[action.payload];
      return { ...state, monthTransactions: newTransactions };
    }
    case keys.UPDATE_TRANSACTION: {
      return {
        ...state,
        monthTransactions: {
          ...state.monthTransactions,
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
