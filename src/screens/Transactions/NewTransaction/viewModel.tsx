import dayjs from "dayjs";
import { useEffect, useState } from "react";
import { CategoriesList } from "../../../components/CategoryIcons/type";
import { NewTransactionProps } from "../../../types/navigation";

export const useNewTransaction = ({
  navigation,
  route,
}: NewTransactionProps) => {
  const [transactionType, setTransactionType] = useState<"income" | "outcome">(
    "outcome",
  );

  const [transactionDate, setTransactionDate] = useState(new Date());
  const [viewDate, setViewDate] = useState("Hoje");
  const [open, setOpen] = useState(false);

  const [fixedOrInstallTransaction, setFixedOrInstallTransaction] = useState<
    "fixed" | "installments" | null
  >(null);
  const [installmentTransaction, setInstallmentTransaction] = useState(false);
  const [amountOfTransactions, setAmountOfTransactions] = useState(false);

  const [transactionAmount, setTransactionAmount] = useState(0);
  const [transactionName, setTransactionName] = useState("");

  const [category, setCategory] = useState<CategoriesList>("home");

  const onChangeTransactionAmount = (floatValue: number) => {
    setTransactionAmount(Number(floatValue));
  };

  const handleSetCategory = () => {
    navigation.navigate("CategorySelector", {
      category,
    });
  };

  const handleFixedOrInstallTransaction = (
    fixedOrInstall: "fixed" | "installments" | null,
  ) => {
    if (fixedOrInstall === fixedOrInstallTransaction) {
      setFixedOrInstallTransaction(null);
      return;
    }
    setFixedOrInstallTransaction(fixedOrInstall);
  };

  const handleSetAccount = () => {
    // navigation.navigate("AccountSelector");
  };

  const handleSetDate = () => {
    setOpen(true);
  };

  const onConfirm = (date: Date) => {
    setOpen(false);
    setTransactionDate(date);
    const viewDay = dayjs(date);
    setViewDate(viewDay.format("dddd, DD [de] MMM YYYY"));
  };

  const onCancel = () => {
    setOpen(false);
  };

  useEffect(() => {
    if (route.params?.category) setCategory(route.params.category);
  }, [route]);

  useEffect(() => {
    setTransactionName("");
    if (transactionType === "income") {
      setCategory("salary");
    } else {
      setCategory("home");
    }
  }, [transactionType]);

  return {
    transactionType,
    setTransactionType,
    transactionAmount,
    setTransactionName,
    transactionName,
    onChangeTransactionAmount,
    category,
    setCategory,
    handleSetAccount,
    handleSetCategory,
    onConfirm,
    onCancel,
    open,
    handleFixedOrInstallTransaction,
    fixedOrInstallTransaction,
    viewDate,
    transactionDate,
    handleSetDate,
  };
};
