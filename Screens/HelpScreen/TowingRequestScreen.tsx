import React from "react";
import {
  View,
  Text,
  Alert,
  TouchableOpacity,
  StyleSheet,
  Image,
  TextInput,
} from "react-native";
import { useNavigation } from "@react-navigation/native";
import { StackNavigationProp } from "@react-navigation/stack";
import { RootStackParamList } from "../../types";
import { useForm, Controller } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as Yup from "yup";

type TowingRequestScreenNavigationProp = StackNavigationProp<
  RootStackParamList,
  "TowingRequestScreen"
>;

type FormData = {
  weight: number;
  length: number;
  width: number;
};

const schema = Yup.object().shape({
  weight: Yup.number()
    .typeError("Введіть числове значення")
    .required("Вага обов'язкова")
    .max(2790, "Вага не може перевищувати 2790 кг"),
  length: Yup.number()
    .typeError("Введіть числове значення")
    .required("Довжина обов'язкова")
    .max(5, "Довжина не може перевищувати 5 метрів"),
  width: Yup.number()
    .typeError("Введіть числове значення")
    .required("Ширина обов'язкова")
    .max(3.2, "Ширина не може перевищувати 3.2 метра"),
});

export default function TowingRequestScreen() {
  const navigation = useNavigation<TowingRequestScreenNavigationProp>();

  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm<FormData>({
    resolver: yupResolver(schema),
    defaultValues: {
      weight: undefined,
      length: undefined,
      width: undefined,
    },
  });

  const handleConfirm = (data: FormData) => {
    Alert.alert("Підтвердження", "Ваш запит прийнято.", [
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

      <Controller
        control={control}
        name="weight"
        render={({ field: { onChange, value } }) => (
          <>
            <TextInput
              style={styles.input}
              placeholder="Вага (кг)"
              keyboardType="numeric"
              maxLength={4}
              onChangeText={(text) => onChange(parseFloat(text) || undefined)}
              value={value ? value.toString() : ""}
            />
            {errors.weight && (
              <Text style={styles.error}>{errors.weight.message}</Text>
            )}
          </>
        )}
      />

      <Controller
        control={control}
        name="length"
        render={({ field: { onChange, value } }) => (
          <>
            <TextInput
              style={styles.input}
              placeholder="Довжина (м)"
              keyboardType="numeric"
              maxLength={2}
              onChangeText={(text) => onChange(parseFloat(text) || undefined)}
              value={value ? value.toString() : ""}
            />
            {errors.length && (
              <Text style={styles.error}>{errors.length.message}</Text>
            )}
          </>
        )}
      />

      <Controller
        control={control}
        name="width"
        render={({ field: { onChange, value } }) => (
          <>
            <TextInput
              style={styles.input}
              placeholder="Ширина (м)"
              keyboardType="numeric"
              maxLength={3}
              onChangeText={(text) => onChange(parseFloat(text) || undefined)}
              value={value ? value.toString() : ""}
            />
            {errors.width && (
              <Text style={styles.error}>{errors.width.message}</Text>
            )}
          </>
        )}
      />

      <TouchableOpacity
        style={styles.button}
        onPress={handleSubmit(handleConfirm)}
      >
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
    marginBottom: 10,
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
  error: {
    color: "red",
    marginBottom: 10,
    fontSize: 14,
  },
});
