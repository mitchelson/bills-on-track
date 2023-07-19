import { createNativeStackNavigator } from "@react-navigation/native-stack";
import React, { useEffect } from "react";
import { useSelector } from "react-redux";
import Auth from "../screens/Auth";
import AppRoutes from "./app.route";

const Stack = createNativeStackNavigator();

const Routes = () => {
  const isLogged = useSelector((state) => state.user.isLogged);

  useEffect(() => {
    console.log("isLogged => ", isLogged);
  }, [isLogged]);

  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
      }}
    >
      {isLogged ? (
        <Stack.Screen name="Routes" component={AppRoutes} />
      ) : (
        <Stack.Screen name="Login" component={Auth} />
      )}
    </Stack.Navigator>
  );
};

export default Routes;
