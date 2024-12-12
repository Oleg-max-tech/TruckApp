import React, { useState } from "react";
import { View, Text, TextInput, Button, StyleSheet, Alert } from "react-native";
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

    // Перевірка на заповненість полів
    if (!weight || !length || !width) {
      Alert.alert("Помилка", "Будь ласка, заповніть всі поля.");
      return;
    }

    // Перевірка обмежень
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

    Alert.alert(
      "Підтвердження",
      "Ваш запит прийнято. Евакуатор під'їде найближчим часом.",
      [
        {
          text: "OK",
          onPress: () => navigation.navigate("MapScreen"),
        },
      ]
    );
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Введіть параметри:</Text>
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
      <Button title="Підтвердити" onPress={handleConfirm} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
    backgroundColor: "#f5f5f5",
  },
  title: {
    fontSize: 20,
    fontWeight: "bold",
    marginBottom: 20,
  },
  input: {
    borderWidth: 1,
    borderColor: "#ccc",
    borderRadius: 8,
    padding: 10,
    marginBottom: 16,
    backgroundColor: "#fff",
  },
});
