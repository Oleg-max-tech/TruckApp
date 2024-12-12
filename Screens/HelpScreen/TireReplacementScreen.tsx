import React, { useState } from "react";
import {
  View,
  Text,
  StyleSheet,
  Button,
  Alert,
  ScrollView,
  TextInput,
} from "react-native";
import { Picker } from "@react-native-picker/picker";

export default function TireReplacementScreen({ navigation }: any) {
  const [tireType, setTireType] = useState<string>("зимова");
  const [tireSize, setTireSize] = useState<string>("");

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
    <ScrollView contentContainerStyle={styles.container}>
      <Text style={styles.title}>Виберіть тип шини та розмірність</Text>
      <View style={styles.inputContainer}>
        <TextInput
          style={styles.input}
          placeholder="Розмірність шин"
          keyboardType="numeric"
          maxLength={2}
          value={tireSize}
          onChangeText={setTireSize}
        />
      </View>
      <View style={styles.buttonContainer}>
        <Button title="Підтвердити" onPress={handleSubmit} />
      </View>

      <View style={styles.pickerContainer}>
        <Picker
          selectedValue={tireType}
          style={styles.picker}
          onValueChange={(itemValue) => setTireType(itemValue)}
        >
          <Picker.Item label="Зимова" value="зимова" />
          <Picker.Item label="Літня" value="літня" />
        </Picker>
      </View>
    </ScrollView>
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
    textAlign: "center",
  },
  pickerContainer: {
    width: "100%",
    marginBottom: 30,
  },
  picker: {
    height: 50,
    borderWidth: 1,
    borderColor: "#ddd",
    borderRadius: 8,
    backgroundColor: "#fff",
  },
  inputContainer: {
    width: "100%",
    marginBottom: 30,
  },
  input: {
    borderWidth: 1,
    borderColor: "#ccc",
    borderRadius: 8,
    padding: 10,
    marginBottom: 16,
    backgroundColor: "#fff",
  },
  buttonContainer: {
    marginTop: 40,
    width: "100%",
  },
});
