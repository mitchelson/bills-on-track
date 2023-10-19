
import { BillDTO } from "../../types";
import * as keys from "../constants/transactions";

export const createNewTransaction = (transaction: BillDTO) => {
  return (dispatch: any) => {
    dispatch({ type: keys.CREATE_NEW_TRANSACTION, payload: transaction });
  };
};

export const updateTransaction = (transaction: BillDTO) => {
  return (dispatch: any) => {
    dispatch({ type: keys.UPDATE_TRANSACTION, payload: transaction });
  };
};

export const deleteTransaction = (transactionId: string) => {
  return (dispatch: any) => {
    dispatch({ type: keys.DELETE_TRANSACTION, payload: transactionId });
  };
};

export const deleteAllTransaction = () => {
  return (dispatch: any) => {
    dispatch({ type: keys.DELETE_ALL_TRANSACTION, payload: null });
  };
};

export const setBalance = (balance: number) => {
  return (dispatch: any) => {
    dispatch({ type: keys.SET_BALANCE, payload: balance });
  };
}
