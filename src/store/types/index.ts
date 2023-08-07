import { BillDTO } from "../../types";

export interface InitialStateTransactions {
  transactions: { [x: string]: BillDTO };
  balance: number;
}
