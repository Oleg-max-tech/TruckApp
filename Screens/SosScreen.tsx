import React from "react";
import { View, Text, StyleSheet, TouchableOpacity } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { StackNavigationProp } from "@react-navigation/stack";

type RootStackParamList = {
  Sos: undefined;
  Tabs: undefined;
};

type SosScreenNavigationProp = StackNavigationProp<RootStackParamList, "Sos">;

export default function SosScreen() {
  const navigation = useNavigation<SosScreenNavigationProp>();

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Emergency SOS</Text>
      <TouchableOpacity
        style={styles.sosButton}
        onPress={() => navigation.navigate("Tabs")}
      >
        <Text style={styles.sosButtonText}>SOS</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#ff4d4d",
    padding: 20,
  },
  title: {
    fontSize: 36,
    fontWeight: "bold",
    color: "#fff",
    marginBottom: 40,
    textAlign: "center",
  },
  sosButton: {
    width: 200,
    height: 200,
    borderRadius: 100,
    backgroundColor: "#fff",
    justifyContent: "center",
    alignItems: "center",
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 5 },
    shadowOpacity: 0.3,
    shadowRadius: 10,
    elevation: 10,
  },
  sosButtonText: {
    fontSize: 48,
    fontWeight: "bold",
    color: "#ff4d4d",
  },
});
