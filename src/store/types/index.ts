import { BillDTO } from "../../types";

export interface InitialStateTransactions {
  allTransactions: {
    [x: string]: {
      [x: string]: {
        [x: string]: BillDTO
      }
    }
  };
  balance: number;
}
