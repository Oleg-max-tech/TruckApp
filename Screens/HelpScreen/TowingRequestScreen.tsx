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

export default function TowingRequestScreen() {
  const [weight, setWeight] = useState<string>("");
  const [length, setLength] = useState<string>("");
  const [width, setWidth] = useState<string>("");
  const navigation = useNavigation<TowingRequestScreenNavigationProp>();

  const handleConfirm = () => {
    const weightValue = parseFloat(weight);
    const lengthValue = parseFloat(length);
    const widthValue = parseFloat(width);

    if (!weight || !length || !width) {
      Alert.alert("Помилка", "Будь ласка, заповніть всі поля.");
      return;
    }

    if (weightValue > 2790) {
      Alert.alert("Помилка", "Вага не може перевищувати 2790 кг.");
      return;
    }
    if (lengthValue > 5) {
      Alert.alert("Помилка", "Довжина не може перевищувати 5 метрів.");
      return;
    }
    if (widthValue > 3.2) {
      Alert.alert("Помилка", "Ширина не може перевищувати 3.2 метра.");
      return;
    }

    Alert.alert("Підтвердження", "Ваш запит прийнято. ", [
      {
        text: "OK",
        onPress: () => navigation.navigate("MapScreen"),
      },
    ]);
  };

  return (
    <View style={styles.container}>
      <Image
        source={{ uri: "https://example.com/towing-image.jpg" }}
        style={styles.image}
        resizeMode="contain"
      />
      <Text style={styles.title}>Заповніть параметри для евакуатора:</Text>
      <TextInput
        style={styles.input}
        placeholder="Вага (кг)"
        keyboardType="numeric"
        maxLength={4}
        value={weight}
        onChangeText={setWeight}
      />
      <TextInput
        style={styles.input}
        placeholder="Довжина (м)"
        keyboardType="numeric"
        maxLength={2}
        value={length}
        onChangeText={setLength}
      />
      <TextInput
        style={styles.input}
        placeholder="Ширина (м)"
        keyboardType="numeric"
        maxLength={2}
        value={width}
        onChangeText={setWidth}
      />
      <TouchableOpacity style={styles.button} onPress={handleConfirm}>
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
    // justifyContent: "center",
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
