import {
  Entypo,
  MaterialCommunityIcons,
  MaterialIcons,
} from "@expo/vector-icons";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import React from "react";
import Icons from "../components/Icons";
import Home from "../screens/Home";
import Report from "../screens/Report";
import Settings from "../screens/Settings";
import NewTransaction from "../screens/Transactions/NewTransaction";
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
          backgroundColor: "#fff",
          shadowColor: "#000",
          shadowOpacity: 0.2,
          shadowRadius: 16,
          elevation: 20,
          borderTopLeftRadius: 16,
          borderTopRightRadius: 16,
        },
      }}
    >
      <Tab.Screen
        options={{
          tabBarItemStyle: {
            borderRadius: 8,
            marginTop: 10,
            width: 62,
            height: 40,
          },
          tabBarIcon: ({ focused, color }) => (
            // <Icons name="home" color={focused ? color : darkTheme.grey100} />
            // <FontAwesome5 name="home" size={24} color="black" />
            <Entypo name="home" size={24} color={focused ? color : "black"} />
          ),
        }}
        name="Home"
        component={Home}
      />

      <Tab.Screen
        options={{
          tabBarItemStyle: {
            borderRadius: 8,
            marginTop: 10,
            width: 62,
            height: 40,
          },
          tabBarIcon: ({ focused, color }) => (
            // <Icons name="home" color={focused ? color : darkTheme.grey100} />
            // <FontAwesome5 name="home" size={24} color="black" />
            // <Entypo name="home" size={24} color="black" />
            <MaterialIcons
              name="sync-alt"
              size={24}
              color={focused ? color : "black"}
            />
          ),
        }}
        name="Report"
        component={Report}
      />
      <Tab.Screen
        options={{
          tabBarItemStyle: {
            backgroundColor: "#16C64F",
            borderRadius: 8,
            marginTop: 10,
            width: 62,
            height: 40,
          },
          tabBarIcon: ({ focused, color }) => (
            <MaterialIcons name="add" size={24} color="white" />
          ),
        }}
        name="NewTransaction"
        component={NewTransaction}
      />

      <Tab.Screen
        options={{
          tabBarItemStyle: {
            borderRadius: 8,
            marginTop: 10,
            width: 62,
            height: 40,
          },
          tabBarIcon: ({ focused, color }) => (
            <Icons name="bar-chart-2" color={focused ? color : "black"} />
          ),
        }}
        name="Sync"
        component={Report}
      />
      <Tab.Screen
        options={{
          tabBarItemStyle: {
            borderRadius: 8,
            marginTop: 10,
            width: 62,
            height: 40,
          },

          tabBarIcon: ({ focused, color }) => (
            <MaterialCommunityIcons
              name="account"
              size={24}
              color={focused ? color : "black"}
            />
            // <Icons
            //   name="user-"
            //   color={focused ? color : darkTheme.grey100}
            // />
          ),
        }}
        name="Settings"
        component={Settings}
      />
    </Tab.Navigator>
  );
};

export default AppRoutes;
