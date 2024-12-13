import React, { useState } from "react";
import {
  View,
  Text,
  TextInput,
  Alert,
  TouchableOpacity,
  StyleSheet,
  Image,
} from "react-native";
import { useNavigation } from "@react-navigation/native";
import { StackNavigationProp } from "@react-navigation/stack";
import { RootStackParamList } from "../../types";

type TowingRequestScreenNavigationProp = StackNavigationProp<
  RootStackParamList,
  "TowingRequestScreen"
>;

export default function TireReplacementScreen() {
  const [tireType, setTireType] = useState<string>("зимова");
  const [tireSize, setTireSize] = useState<string>("");
  const navigation = useNavigation<TowingRequestScreenNavigationProp>();

  const handleSubmit = () => {
    if (!tireSize) {
      Alert.alert("Помилка", "Будь ласка, вкажіть розмірність шин.");
      return;
    }

    if (parseInt(tireSize) > 19) {
      Alert.alert("Помилка!", "Максимальна розмірність шин R18");
      return;
    }

    Alert.alert(
      "Підтвердження",
      `Ви вибрали ${tireSize} ${tireType} шини. Підтверджуєте?`,
      [
        {
          text: "Ні",
          style: "cancel",
        },
        {
          text: "Так",
          onPress: () => {
            console.log(`Тип шини: ${tireType}, Розмірність: ${tireSize}`);
            navigation.navigate("MapScreen");
          },
        },
      ]
    );
  };

  return (
    <View style={styles.container}>
      <Image
        source={{ uri: "https://example.com/tire-image.jpg" }}
        style={styles.image}
        resizeMode="contain"
      />
      <Text style={styles.title}>Виберіть тип шини та розмірність</Text>
      <TextInput
        style={styles.input}
        placeholder="Розмірність шин"
        keyboardType="numeric"
        maxLength={2}
        value={tireSize}
        onChangeText={setTireSize}
      />
      <View style={styles.tireTypeContainer}>
        <TouchableOpacity
          style={[
            styles.tireTypeButton,
            tireType === "зимова" && styles.tireTypeButtonSelected,
          ]}
          onPress={() => setTireType("зимова")}
        >
          <Text style={styles.tireTypeButtonText}>Зимова</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={[
            styles.tireTypeButton,
            tireType === "літня" && styles.tireTypeButtonSelected,
          ]}
          onPress={() => setTireType("літня")}
        >
          <Text style={styles.tireTypeButtonText}>Літня</Text>
        </TouchableOpacity>
      </View>
      <TouchableOpacity style={styles.button} onPress={handleSubmit}>
        <Text style={styles.buttonText}>Підтвердити</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: "#eaf4fc",
  },
  image: {
    width: "100%",
    height: 150,
    marginBottom: 20,
  },
  title: {
    fontSize: 24,
    fontWeight: "bold",
    color: "#333",
    textAlign: "center",
    marginBottom: 30,
  },
  input: {
    borderWidth: 1,
    borderColor: "#ccc",
    borderRadius: 12,
    padding: 12,
    marginBottom: 20,
    backgroundColor: "#fff",
    fontSize: 16,
  },
  tireTypeContainer: {
    flexDirection: "row",
    justifyContent: "space-around",
    marginBottom: 20,
  },
  tireTypeButton: {
    padding: 15,
    borderWidth: 1,
    borderColor: "#ccc",
    borderRadius: 12,
    backgroundColor: "#f5f5f5",
  },
  tireTypeButtonSelected: {
    backgroundColor: "#007bff",
    borderColor: "#0056b3",
  },
  tireTypeButtonText: {
    fontSize: 16,
    color: "#333",
  },
  button: {
    backgroundColor: "#007bff",
    paddingVertical: 15,
    borderRadius: 12,
    alignItems: "center",
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.2,
    shadowRadius: 4,
    elevation: 5,
  },
  buttonText: {
    color: "#fff",
    fontSize: 18,
    fontWeight: "bold",
  },
});
