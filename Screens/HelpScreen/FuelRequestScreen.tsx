import React, { useState } from "react";
import { View, Text, StyleSheet, TextInput, Button, Alert } from "react-native";
import { Picker } from "@react-native-picker/picker";

export default function FuelRequestScreen({ navigation }: any) {
  const [liters, setLiters] = useState<string>("");
  const [fuelType, setFuelType] = useState<string>("");

  const handleSubmit = () => {
    if (!liters || !fuelType) {
      Alert.alert("Помилка", "Будь ласка, заповніть всі поля.");
      return;
    }

    if (parseInt(liters) > 100) {
      Alert.alert(
        "Помилка",
        " Кількість палива не може перевищувати 100тлітрівІ"
      );
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
            navigation.navigate("MapScreen");
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
          maxLength={3}
          value={liters}
          onChangeText={setLiters}
          keyboardType="numeric"
        />
        <Button title="Підтвердити" onPress={handleSubmit} />
      </View>
      <Picker
        selectedValue={fuelType}
        style={styles.picker}
        onValueChange={(itemValue: string) => setFuelType(itemValue)}
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
    justifyContent: "center",
    alignItems: "center",
  },
  title: {
    fontSize: 18,
    fontWeight: "bold",
    marginBottom: 20,
    textAlign: "center",
  },
  inputContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: 20,
  },
  input: {
    height: 40,
    borderColor: "gray",
    borderWidth: 1,
    flex: 1,
    paddingLeft: 8,
  },
  picker: {
    height: 50,
    width: "100%",
    marginBottom: 20,
  },
});
