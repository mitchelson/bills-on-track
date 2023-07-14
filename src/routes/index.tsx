import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import React from "react";
import Home from "../screen/Home";
import Report from "../screen/Report";

const Tab = createBottomTabNavigator();

const Routes = () => {
  return (
    <Tab.Navigator>
      <Tab.Screen name="Home" component={Home} />
      <Tab.Screen name="Report" component={Report} />
    </Tab.Navigator>
  );
};

export default Routes;
