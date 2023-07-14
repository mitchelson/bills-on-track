import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import React from "react";
import Home from "../screens/Home";
import Report from "../screens/Report";

const Tab = createBottomTabNavigator();

const Routes = () => {
  return (
    <Tab.Navigator
      screenOptions={{
        headerShown: false,
        tabBarActiveTintColor: "#0db74e",
      }}
    >
      <Tab.Screen name="Home" component={Home} />
      <Tab.Screen name="Report" component={Report} />
    </Tab.Navigator>
  );
};

export default Routes;
