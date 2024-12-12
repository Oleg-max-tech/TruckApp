import React from "react";
import { View, Text, StyleSheet, TouchableOpacity } from "react-native";
import { Ionicons } from "@expo/vector-icons";
import { emergencyServices } from "../../service";

export default function EmergencyScreen() {
  return (
    <View style={styles.container}>
      {emergencyServices.map((service) => (
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
              alert(`Дзвінок до: ${service.phoneNumber}`);
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
    padding: 15,
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
    fontSize: 16,
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
    fontSize: 14,
    fontWeight: "bold",
  },
});
