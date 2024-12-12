import React, { useState } from "react";
import { View, Text, StyleSheet, TextInput, Button, Alert } from "react-native";
import { Picker } from "@react-native-picker/picker"; // Оновлений імпорт

export default function FuelRequestScreen({ navigation }: any) {
  const [liters, setLiters] = useState<string>("");
  const [fuelType, setFuelType] = useState<string>("");

  const handleSubmit = () => {
    if (!liters || !fuelType) {
      Alert.alert("Помилка", "Будь ласка, заповніть всі поля.");
      return;
    }

    Alert.alert(
      "Підтвердження",
      `Ви вибрали ${liters} літрів ${fuelType} пального. Підтверджуєте?`,
      [
        {
          text: "Ні",
          style: "cancel",
        },
        {
          text: "Так",
          onPress: () => {
            console.log(
              `Кількість літрів: ${liters}, Тип пального: ${fuelType}. Машина з паливом під'їде найближчим часом. `
            );
            navigation.navigate("MapScreen"); // Перехід на карту після підтвердження
          },
        },
      ]
    );
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>
        Введіть кількість літрів та виберіть тип пального
      </Text>
      <View style={styles.inputContainer}>
        <TextInput
          style={styles.input}
          placeholder="Кількість літрів"
          value={liters}
          onChangeText={setLiters}
          keyboardType="numeric"
        />
        <Button title="Підтвердити" onPress={handleSubmit} />
      </View>
      <Picker
        selectedValue={fuelType}
        style={styles.picker}
        onValueChange={(itemValue: string) => setFuelType(itemValue)} // Визначення типу
      >
        <Picker.Item label="Бензин" value="Бензин" />
        <Picker.Item label="Дизель" value="Дизель" />
        <Picker.Item label="Газ" value="Газ" />
      </Picker>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    justifyContent: "center", // Вирівнює елементи по вертикалі
    alignItems: "center", // Вирівнює елементи по горизонталі
  },
  title: {
    fontSize: 18,
    fontWeight: "bold",
    marginBottom: 20,
    textAlign: "center", // Вирівнює заголовок по центру
  },
  inputContainer: {
    flexDirection: "row", // Розташовує елементи по горизонталі
    justifyContent: "space-between", // Пробіл між TextInput і кнопкою
    alignItems: "center", // Вирівнює по вертикалі
    marginBottom: 20, // Відступ між полем і Picker
  },
  input: {
    height: 40,
    borderColor: "gray",
    borderWidth: 1,
    flex: 1, // Текстове поле заповнює доступну ширину
    paddingLeft: 8,
  },
  picker: {
    height: 50,
    width: "100%", // Робить Picker максимально широким
    marginBottom: 20, // Відступ між списком і кнопкою
  },
});
