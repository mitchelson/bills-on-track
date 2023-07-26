import { createNativeStackNavigator } from "@react-navigation/native-stack";
import React from "react";
import { useSelector } from "react-redux";
import AppRoutes from "./app.route";
import AuthRoutes from "./auth.route";

const Stack = createNativeStackNavigator();

const Routes = () => {
  const isLogged = useSelector((state) => state.user.isLogged);

  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
      }}
    >
      {isLogged ? (
        <Stack.Screen name="Routes" component={AppRoutes} />
      ) : (
        <Stack.Screen name="AuthRoutes" component={AuthRoutes} />
      )}
    </Stack.Navigator>
  );
};

export default Routes;
