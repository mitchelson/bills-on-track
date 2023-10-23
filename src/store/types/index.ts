import { BillDTO } from "../../types";

export interface InitialStateTransactions {
  allTransactions: {
    [x: string]: {
      [x: string]: {
        [x: string]: BillDTO
      }
    }
  };
}

export interface InitialStateAccounts {
  accounts: {
    [x: string]: {
      balance: number;
      name: string;
      image: string;
    }
  }
}
