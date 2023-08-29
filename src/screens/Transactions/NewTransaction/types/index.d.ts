export interface HeaderNewTransactionProps {
  transactionType: "income" | "outcome";
  onPress: (type: "income" | "outcome") => void;
}
