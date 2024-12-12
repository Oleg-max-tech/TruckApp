import React from "react";
import { View, Text, StyleSheet, TouchableOpacity } from "react-native";
import { Ionicons } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";
import { StackNavigationProp } from "@react-navigation/stack";
import { RootStackParamList } from "../../types";

type EmergencyScreenNavigationProp = StackNavigationProp<
  RootStackParamList,
  "EmergencyScreen"
>;

export default function EmergencyScreen() {
  const navigation = useNavigation<EmergencyScreenNavigationProp>(); // Ініціалізація з типами навігації

  const emergencyServices = [
    {
      id: 1,
      name: "Пожежна охорона",
      action: "Зателефонувати",
      icon: "flame-outline" as const, // Вказуємо конкретний тип
      phoneNumber: "101", // Номер телефону для виклику
    },
    {
      id: 2,
      name: "Поліція",
      action: "Зателефонувати",
      icon: "shield-checkmark-outline" as const, // Вказуємо конкретний тип
      phoneNumber: "102", // Номер телефону для виклику
    },
    {
      id: 3,
      name: "Швидка допомога",
      action: "Зателефонувати",
      icon: "heart-outline" as const, // Вказуємо конкретний тип
      phoneNumber: "103", // Номер телефону для виклику
    },
    {
      id: 4,
      name: "Аварійна служба газу",
      action: "Зателефонувати",
      icon: "flame-outline" as const, // Вказуємо конкретний тип
      phoneNumber: "104", // Номер телефону для виклику
    },
  ];

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
              // Імітуємо дзвінок (можна додати код для фактичного виклику через телефон)
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
    fontSize: 16, // Зменшений шрифт для тексту
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
    fontSize: 14, // Зменшений шрифт для кнопки
    fontWeight: "bold",
  },
});