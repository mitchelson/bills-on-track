import { useState } from "react";

export const useNewTransaction = () => {
  const [transactionType, setTransactionType] = useState<"income" | "outcome">(
    "income",
  );

  return {
    transactionType,
    setTransactionType,
  };
};
