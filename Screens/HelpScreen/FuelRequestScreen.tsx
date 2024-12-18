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
import { Controller, useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as Yup from "yup";

type TowingRequestScreenNavigationProp = StackNavigationProp<
  RootStackParamList,
  "TowingRequestScreen"
>;

type FormData = {
  liters: string;
};

const schema = Yup.object().shape({
  liters: Yup.string()
    .matches(/^\d+$/, "Введіть числове значення!!!")
    .required("Обсяг палива обов'язковий!!!")
    .test(
      "is-valid-number",
      "Кількість палива повинна бути між 10 та 99 літрів!!!",
      (value) => {
        const numberValue = Number(value);
        return numberValue >= 10 && numberValue <= 99;
      }
    ),
});

export default function FuelRequestScreen() {
  const [fuelType, setFuelType] = useState<string>("Бензин");
  const navigation = useNavigation<TowingRequestScreenNavigationProp>();

  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm<FormData>({
    resolver: yupResolver(schema),
    defaultValues: {
      liters: "",
    },
  });

  const onSubmit = (data: FormData) => {
    const { liters } = data;

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
              `Кількість літрів: ${liters}, Тип пального: ${fuelType}`
            );
            navigation.navigate("MapScreen");
          },
        },
      ]
    );
  };

  return (
    <View style={[styles.container, { justifyContent: "flex-start" }]}>
      <Image
        source={{ uri: "https://example.com/fuel-image.jpg" }}
        style={styles.image}
        resizeMode="contain"
      />
      <Text style={styles.title}>Введіть кількість літрів та тип пального</Text>

      <Controller
        control={control}
        name="liters"
        render={({ field: { onChange, value } }) => (
          <TextInput
            style={[styles.input, errors.liters && { borderColor: "red" }]}
            placeholder="Кількість літрів"
            keyboardType="numeric"
            maxLength={3}
            value={value ? value.toString() : ""}
            onChangeText={onChange}
          />
        )}
      />
      {errors.liters && (
        <Text style={styles.errorText}>{errors.liters.message}</Text>
      )}

      <View style={styles.fuelTypeContainer}>
        <TouchableOpacity
          style={[
            styles.fuelTypeButton,
            fuelType === "Бензин" && styles.fuelTypeButtonSelected,
          ]}
          onPress={() => setFuelType("Бензин")}
        >
          <Text style={styles.fuelTypeButtonText}>Бензин</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={[
            styles.fuelTypeButton,
            fuelType === "Дизель" && styles.fuelTypeButtonSelected,
          ]}
          onPress={() => setFuelType("Дизель")}
        >
          <Text style={styles.fuelTypeButtonText}>Дизель</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={[
            styles.fuelTypeButton,
            fuelType === "Газ" && styles.fuelTypeButtonSelected,
          ]}
          onPress={() => setFuelType("Газ")}
        >
          <Text style={styles.fuelTypeButtonText}>Газ</Text>
        </TouchableOpacity>
      </View>

      <TouchableOpacity style={styles.button} onPress={handleSubmit(onSubmit)}>
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
  errorText: {
    color: "red",
    fontSize: 12,
    marginBottom: 20,
    textAlign: "center",
  },
  fuelTypeContainer: {
    flexDirection: "row",
    justifyContent: "space-around",
    marginBottom: 20,
  },
  fuelTypeButton: {
    padding: 15,
    borderWidth: 1,
    borderColor: "#ccc",
    borderRadius: 12,
    backgroundColor: "#f5f5f5",
  },
  fuelTypeButtonSelected: {
    backgroundColor: "#007bff",
    borderColor: "#0056b3",
  },
  fuelTypeButtonText: {
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
