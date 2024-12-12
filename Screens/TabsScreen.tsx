import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import HelpScreen from "./HelpScreen/HelpScreen";
import EmergencyScreen from "./EmergencyScreen/EmergencyScreen";
import { Ionicons } from "@expo/vector-icons";

const Tab = createBottomTabNavigator();

export default function TabsScreen() {
  return (
    <Tab.Navigator
      screenOptions={{
        tabBarActiveTintColor: "#ff4d4d",
        tabBarInactiveTintColor: "gray",
      }}
    >
      <Tab.Screen
        name="Help"
        component={HelpScreen}
        options={{
          tabBarLabel: "Help",
          tabBarIcon: ({ color, size }) => (
            <Ionicons name="help-circle" size={size} color={color} />
          ),
        }}
      />
      <Tab.Screen
        name="Emergency"
        component={EmergencyScreen}
        options={{
          tabBarLabel: "Emergency",
          tabBarIcon: ({ color, size }) => (
            <Ionicons name="warning" size={size} color={color} />
          ),
        }}
      />
    </Tab.Navigator>
  );
}
