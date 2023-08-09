import { useNavigation } from "@react-navigation/native";
import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { fullMonth } from "../../../core/date";

export const useHomeView = () => {
  const user = useSelector((state) => state.user.profile);
  const { balance, transactions } = useSelector((state) => state.transactions);

  const { navigate } = useNavigation();

  const [revenue, setRevenue] = useState(120000);
  const [expenses, setExpenses] = useState(115120);
  const [expected, setExpected] = useState(0);

  const [loadTransactions, setLoadingTransactions] = useState(false);

  const editBalance = () => {
    navigate("EditBalance" as never);
  };

  useEffect(() => {
    setExpected(balance + revenue - expenses);
  }, [balance]);

  return {
    user,
    balance,
    loadTransactions,
    expenses,
    expected,
    revenue,
    month: fullMonth(),
    editBalance,
  };
};
