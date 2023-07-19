import { useState } from "react";
import { useSelector } from "react-redux";

export const useHomeView = () => {
  const user = useSelector((state) => state.user.profile);
  const [balance, setBalance] = useState(120000);
  const [expenses, setExpenses] = useState(120000);
  const [expected, setExpected] = useState(120000);
  const [current, setCurrent] = useState(120000);

  return {
    user,
    balance,
  };
};
