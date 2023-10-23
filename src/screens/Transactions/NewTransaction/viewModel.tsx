import dayjs from "dayjs";
import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { v4 as uuidv4 } from "uuid";
import { CategoriesList } from "../../../../core/ui/components/CategoryIcons/type";
import { createNewTransaction } from "../../../store/actions/transactions.actions";
import { BillDTO } from "../../../types";
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

  const dispatch = useDispatch();

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
    navigation.navigate("AccountSelector");
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

  const handleAddTransaction = () => {
    const id = uuidv4();
    const transaction = {
      id,
      createdAt: dayjs().format("YYYY-MM-DD"),
      categoryId: category,
      paymentDate: dayjs(transactionDate).format("YYYY-MM-DD"),
      name: transactionName,
      value: transactionAmount,
      type: transactionType,
      description: "",
      status: "",
      isRecurringPayment: false,
      monthTransaction: dayjs(transactionDate).format("YYYY-MM"),
    } as BillDTO;

    dispatch(createNewTransaction(transaction));
    navigation.goBack();
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
    handleAddTransaction,
  };
};
