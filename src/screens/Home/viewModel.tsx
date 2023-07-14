import AsyncStorage from "@react-native-async-storage/async-storage";
import { useEffect, useState } from "react";
import { User } from "../../types";

export const useHomeView = () => {
  const [user, setUser] = useState<User | null>(null);

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
  };
};
