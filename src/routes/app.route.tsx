import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import React from "react";
import Icons from "../components/Icons";
import Home from "../screens/Home";
import Report from "../screens/Report";
import Settings from "../screens/Settings";
import { darkTheme } from "../theme/colors";

const Tab = createBottomTabNavigator();

const AppRoutes = () => {
  return (
    <Tab.Navigator
      sceneContainerStyle={{
        backgroundColor: darkTheme.background,
      }}
      screenOptions={{
        tabBarActiveTintColor: darkTheme.primary,
        headerShown: false,
        tabBarShowLabel: false,
        tabBarStyle: {
          height: 100,
          backgroundColor: "#222",
          borderTopColor: "#222",
        },
      }}
    >
      <Tab.Screen
        options={{
          tabBarIcon: ({ focused, color }) => (
            <Icons name="home" color={focused ? color : darkTheme.grey100} />
          ),
        }}
        name="Home"
        component={Home}
      />
      <Tab.Screen
        options={{
          tabBarIcon: ({ focused, color }) => (
            <Icons name="repeat" color={focused ? color : darkTheme.grey100} />
          ),
        }}
        name="Report"
        component={Report}
      />
      <Tab.Screen
        options={{
          tabBarIcon: ({ focused, color }) => (
            <Icons
              name="settings"
              color={focused ? color : darkTheme.grey100}
            />
          ),
        }}
        name="Settings"
        component={Settings}
      />
    </Tab.Navigator>
  );
};

export default AppRoutes;
