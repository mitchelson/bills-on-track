import { useNavigation } from "@react-navigation/native";
import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { fullMonth } from "../../../core/date";

export const useHomeView = () => {
  const user = useSelector((state) => state.user.profile);
  const allTransactions = useSelector((state) => state.transactions);
  const accounts = useSelector((state) => state.accounts.accounts);

  const { navigate } = useNavigation();

  const [revenue, setRevenue] = useState(120000);
  const [expenses, setExpenses] = useState(115120);
  const [expected, setExpected] = useState(0);
  const [actualBalance, setBalance] = useState(0);

  const [loadTransactions, setLoadingTransactions] = useState(false);

  const editBalance = () => {
    navigate("EditBalance" as never);
  };

  useEffect(() => {
    console.log("accounts => ", accounts);
    let tempTotalBalance = 0;
    Object.keys(accounts)?.forEach((e) => {
      tempTotalBalance += accounts[e].balance;
    });
    setBalance(tempTotalBalance);
    setExpected(tempTotalBalance + revenue - expenses);
  }, [accounts]);

  return {
    user,
    balance: actualBalance,
    loadTransactions,
    expenses,
    expected,
    revenue,
    month: fullMonth(),
    editBalance,
  };
};
