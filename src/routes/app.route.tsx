import {
  Entypo,
  MaterialCommunityIcons,
  MaterialIcons,
} from "@expo/vector-icons";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import React from "react";
import { Bars3CenterLeftIcon } from "react-native-heroicons/solid";
import Home from "../screens/Home";
import Report from "../screens/Report";
import Settings from "../screens/Settings";
import AccountSelector from "../screens/Transactions/AccountSelector";
import CategorySelector from "../screens/Transactions/CategorySelector";
import DetailsTransactions from "../screens/Transactions/DetailsTransactions";
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
            borderRadius: 8,
            marginTop: 10,
            width: 62,
            height: 40,
          },
          tabBarIcon: ({ focused, color }) => (
            <Bars3CenterLeftIcon color={focused ? color : "black"} />
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
          ),
        }}
        name="Settings"
        component={Settings}
      />
    </Tab.Navigator>
  );
};

const Stack = createNativeStackNavigator();

const StackRoutes = () => {
  return (
    <Stack.Navigator
      screenOptions={{ headerShown: false }}
      initialRouteName="Routes"
    >
      <Stack.Screen name="Routes" component={AppRoutes} />
      <Stack.Screen
        options={{ presentation: "modal" }}
        name="NewTransaction"
        component={NewTransaction}
      />
      <Stack.Screen
        options={{ presentation: "modal" }}
        name="DetailsTransaction"
        component={DetailsTransactions}
      />
      <Stack.Screen
        options={{ presentation: "modal" }}
        name="AccountSelector"
        component={AccountSelector}
      />
      <Stack.Screen
        options={{ presentation: "modal" }}
        name="CategorySelector"
        component={CategorySelector}
      />
    </Stack.Navigator>
  );
};

export default StackRoutes;
