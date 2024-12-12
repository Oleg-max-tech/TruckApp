import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import HelpScreen from "./HelpScreen/HelpScreen";
import EmergencyScreen from "./EmergencyScreen/EmergencyScreen";

const Tab = createBottomTabNavigator();

export default function TabsScreen() {
  return (
    <Tab.Navigator
      screenOptions={{
        tabBarActiveTintColor: "#ff4d4d", // Колір для активної вкладки
        tabBarInactiveTintColor: "gray", // Колір для неактивних вкладок
      }}
    >
      <Tab.Screen
        name="Help"
        component={HelpScreen}
        options={{ tabBarLabel: "Help" }}
      />
      <Tab.Screen
        name="Emergency"
        component={EmergencyScreen}
        options={{ tabBarLabel: "Emergency" }}
      />
    </Tab.Navigator>
  );
}
