import React from "react";
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  Linking,
} from "react-native";
import { Ionicons } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";
import { StackNavigationProp } from "@react-navigation/stack";
import { RootStackParamList } from "../../types";
import { services } from "../../service";
import { useUserLocation } from "../../hooks/useUserLocation";

type HelpScreenNavigationProp = StackNavigationProp<RootStackParamList, "SOS">;

export default function HelpScreen() {
  const { location, errorMsg } = useUserLocation();
  const navigation = useNavigation<HelpScreenNavigationProp>();

  return (
    <View style={styles.container}>
      {errorMsg && !location && <Text style={styles.errorMsg}>{errorMsg}</Text>}
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
              switch (service.id) {
                case 1:
                  navigation.navigate("TowingRequestScreen");
                  break;
                case 2:
                  navigation.navigate("FuelRequestScreen");
                  break;
                case 3:
                  navigation.navigate("TireReplacementScreen");
                  break;
                default:
                  break;
              }
            }}
          >
            <Text style={styles.buttonText}>{service.actionButtonLabel}</Text>
          </TouchableOpacity>
        </View>
      ))}
      <TouchableOpacity
        style={styles.settingsButton}
        onPress={() => {
          Linking.openSettings();
        }}
      >
        <Text style={styles.settingsButtonText}>Відкрити налаштування</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#f5f5f5",
    padding: 16,
  },
  errorMsg: {
    color: "#ff4d4d",
    fontSize: 18,
    fontWeight: "bold",
    textAlign: "center",
    marginBottom: 20,
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
  settingsButton: {
    marginTop: 20,
    backgroundColor: "#ff4d4d",
    borderRadius: 8,
    paddingVertical: 12,
    paddingHorizontal: 20,
    alignSelf: "center",
  },
  settingsButtonText: {
    color: "#fff",
    fontSize: 16,
    fontWeight: "bold",
  },
});
