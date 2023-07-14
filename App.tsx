import AsyncStorage from "@react-native-async-storage/async-storage";
import { NavigationContainer } from "@react-navigation/native";
import { useEffect, useState } from "react";
import { StatusBar } from "react-native";
import { ThemeProvider } from "styled-components";
import { DefaultTheme } from "styled-components/native";
import Routes from "./src/routes";
import Login from "./src/screens/Login";
import { darkTheme } from "./src/theme/colors";

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
    <ThemeProvider theme={darkTheme as DefaultTheme}>
      <StatusBar barStyle={"light-content"} backgroundColor="#333" />
      <NavigationContainer>{user ? <Routes /> : <Login />}</NavigationContainer>
    </ThemeProvider>
  );
}
