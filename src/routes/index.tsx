import AsyncStorage from "@react-native-async-storage/async-storage";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import React, { useEffect, useState } from "react";
import Auth from "../screens/Auth";
import AppRoutes from "./app.route";

const Stack = createNativeStackNavigator();

const Routes = () => {
  const [user, setUser] = useState<string | null | number>(0);

  useEffect(() => {
    async function getUserInfo() {
      const user = await AsyncStorage.getItem("@BOT:user");
      setUser(user);
    }
    getUserInfo();
  }, []);

  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
      }}
    >
      {user ? (
        <Stack.Screen name="Routes" component={AppRoutes} />
      ) : (
        <Stack.Screen name="Login" component={Auth} />
      )}
    </Stack.Navigator>
  );
};

export default Routes;
