import { useNavigation } from "@react-navigation/native";
import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { dayjs, fullMonth } from "../../../core/date";

export const useHomeView = () => {
  const user = useSelector((state) => state.user.profile);
  const allTransactions = useSelector(
    (state) => state.transactions.allTransactions,
  );
  const accounts = useSelector((state) => state.accounts.accounts);
  const actualMonthTransactions = dayjs().format("YYYY-MM");
  const { navigate } = useNavigation();

  const [revenue, setRevenue] = useState(0);
  const [expenses, setExpenses] = useState(0);
  const [expected, setExpected] = useState(0);
  const [actualBalance, setBalance] = useState(0);

  const [loadTransactions, setLoadingTransactions] = useState(false);

  const editBalance = () => {
    navigate("EditBalance" as never);
  };

  useEffect(() => {
    let tempTotalBalance = 0;
    Object.keys(accounts)?.forEach((e) => {
      tempTotalBalance += accounts[e].balance;
    });
    setBalance(tempTotalBalance);
    setExpected(tempTotalBalance + revenue - expenses);
  }, [accounts]);

  useEffect(() => {
    console.log(
      "transaction of month => ",
      allTransactions[actualMonthTransactions],
    );
    if (allTransactions[actualMonthTransactions]) {
      let incomeTemp = 0;
      let outcomeTemp = 0;
      const transactionsKeys = Object.keys(
        allTransactions[actualMonthTransactions],
      );
      console.log("transactionsKeys => ", transactionsKeys);
      transactionsKeys.forEach((transactionsDay) => {
        const transactionsIds = Object.keys(
          allTransactions[actualMonthTransactions][transactionsDay],
        );
        transactionsIds.forEach((transactionId) => {
          const transaction =
            allTransactions[actualMonthTransactions][transactionsDay][
              transactionId
            ];
          if (transaction.type === "outcome") {
            outcomeTemp += transaction.value;
          } else {
            incomeTemp += transaction.value;
          }
        });
      });
      setRevenue(incomeTemp);
      setExpenses(outcomeTemp);
      setExpected(incomeTemp - outcomeTemp);
    }
  }, [allTransactions]);

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
