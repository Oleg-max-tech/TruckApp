import React from "react";
import { View, Text, StyleSheet, TouchableOpacity } from "react-native";
import { Ionicons } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";
import { StackNavigationProp } from "@react-navigation/stack";
import { RootStackParamList } from "../../types";
import { Service } from "../../types";

type HelpScreenNavigationProp = StackNavigationProp<RootStackParamList, "SOS">;

export default function HelpScreen() {
  const navigation = useNavigation<HelpScreenNavigationProp>();

  const services: Service[] = [
    {
      id: 1,
      name: "Виклик евакуатора",
      action: "Замовити",
      icon: "car-outline",
    },
    {
      id: 2,
      name: "Підвезення бензину",
      action: "Викликати",
      icon: "water-outline",
    },
    {
      id: 3,
      name: "Заміна покришки",
      action: "Викликати",
      icon: "construct-outline",
    },
  ];

  return (
    <View style={styles.container}>
      {services.map((service) => (
        <View key={service.id} style={styles.card}>
          <Ionicons
            name={service.icon}
            size={48}
            color="#ff4d4d"
            style={styles.icon}
          />
          <Text style={styles.text}>{service.name}</Text>
          <TouchableOpacity
            style={styles.button}
            onPress={() => {
              if (service.id === 1) {
                navigation.navigate("TowingRequestScreen");
              }
              if (service.id === 2) {
                navigation.navigate("FuelRequestScreen");
              }
              if (service.id === 3) {
                navigation.navigate("TireReplacementScreen");
              }
            }}
          >
            <Text style={styles.buttonText}>{service.action}</Text>
          </TouchableOpacity>
        </View>
      ))}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#f5f5f5",
    padding: 16,
  },
  card: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "#fff",
    borderRadius: 12,
    padding: 24,
    marginBottom: 16,
    shadowColor: "#000",
    shadowOpacity: 0.2,
    shadowRadius: 6,
    shadowOffset: { width: 0, height: 3 },
    elevation: 5,
  },
  icon: {
    marginRight: 24,
  },
  text: {
    flex: 1,
    fontSize: 20,
    fontWeight: "bold",
  },
  button: {
    backgroundColor: "#28a745",
    borderRadius: 8,
    padding: 10,
    paddingVertical: 12,
    paddingHorizontal: 20,
  },
  buttonText: {
    color: "#fff",
    fontSize: 16,
    fontWeight: "bold",
  },
});
