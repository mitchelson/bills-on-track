import { BillDTO } from "../../types";

export interface InitialStateTransactions {
  monthTransactions: {
    [x: string]: {
      [x: string]: BillDTO
    }
  };
  balance: number;
}
