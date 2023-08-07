import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { fullMonth } from "../../../core/date";

export const useHomeView = () => {
  const user = useSelector((state) => state.user.profile);
  const { balance, transactions } = useSelector((state) => state.transactions);

  const [revenue, setRevenue] = useState(120000);
  const [expenses, setExpenses] = useState(11512);
  const [expected, setExpected] = useState(0);

  const [loadTransactions, setLoadingTransactions] = useState(false);

  useEffect(() => {
    console.log("transactions => ", transactions);
    setExpected(balance + revenue - expenses);
  }, []);

  return {
    user,
    balance,
    loadTransactions,
    expenses,
    expected,
    revenue,
    month: fullMonth(),
  };
};
