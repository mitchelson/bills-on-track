import AsyncStorage from "@react-native-async-storage/async-storage";
import { useEffect, useState } from "react";
import { User } from "../../types";

export const useHomeView = () => {
  const [user, setUser] = useState<User | null>(null);

  const [balance, setBalance] = useState(120000);
  const [expenses, setExpenses] = useState(120000);
  const [expected, setExpected] = useState(120000);
  const [current, setCurrent] = useState(120000);

  useEffect(() => {
    async function getUserInfo() {
      const user = await AsyncStorage.getItem("@BOT:user");
      if (user) {
        setUser(JSON.parse(user));
      }
    }
    getUserInfo();
  }, []);

  return {
    user,
    balance,
  };
};
