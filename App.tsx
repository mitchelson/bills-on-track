import AsyncStorage from "@react-native-async-storage/async-storage";
import { NavigationContainer } from "@react-navigation/native";
import { useEffect, useState } from "react";
import Routes from "./src/routes";
import Login from "./src/screen/Login";

export default function App() {
  const [user, setUser] = useState<string | null>(null);

  useEffect(() => {
    async function getUserInfo() {
      const user = await AsyncStorage.getItem("@BOT:user");
      setUser(user);
    }
    getUserInfo();
  }, []);

  return (
    <NavigationContainer>{user ? <Routes /> : <Login />}</NavigationContainer>
  );
}
