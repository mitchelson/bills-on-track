import { BillDTO } from "../../types";
import * as keys from "../constants/transactions";

export const initialState = {
  transactions: [] as BillDTO[],
};

const transactions = (state = initialState, action: any) => {
  switch (action.type) {
    case keys.CREATE_NEW_TRANSACTION: {
      return {
        isLogged: true,
        profile: action.payload,
      };
    }
    case keys.DELETE_TRANSACTION: {
      return {
        isLogged: false,
        profile: {},
      };
    }
    case keys.UPDATE_TRANSACTION: {
      return {
        isLogged: true,
        profile: action.payload,
      };
    }
    default: {
      return state;
    }
  }
};
export default transactions;
