import React, { useEffect, useState } from "react";
import { View, Text, Button, StyleSheet, Alert } from "react-native";
import MapView, { Marker } from "react-native-maps";
import * as Location from "expo-location";
import { useNavigation } from "@react-navigation/native";
import { StackNavigationProp } from "@react-navigation/stack";

import { RootStackParamList } from "../types";

type MapScreenNavigationProp = StackNavigationProp<
  RootStackParamList,
  "MapScreen"
>;

export default function MapScreen() {
  const navigation = useNavigation<MapScreenNavigationProp>();
  const [location, setLocation] = useState<{
    latitude: number;
    longitude: number;
  } | null>(null);
  const [errorMsg, setErrorMsg] = useState<string | null>(null);

  useEffect(() => {
    (async () => {
      let { status } = await Location.requestForegroundPermissionsAsync();
      if (status !== "granted") {
        setErrorMsg("Доступ до геолокації відхилено!");
        return;
      }

      try {
        let location = await Location.getCurrentPositionAsync({});
        setLocation({
          latitude: location.coords.latitude,
          longitude: location.coords.longitude,
        });
      } catch (error) {
        setErrorMsg("Не вдалося отримати геолокацію.");
      }
    })();
  }, []);

  const confirmLocation = () => {
    Alert.alert("Підтвердження локації", "Чи підтверджуєте ви свою локацію?", [
      {
        text: "Ні",
        style: "cancel",
      },
      {
        text: "Так",
        onPress: () => {
          Alert.alert("Підтверджено", "Евакуатор прибуде через 10 хвилин.", [
            {
              text: "OK",
              onPress: () => navigation.navigate("Tabs"),
            },
          ]);
        },
      },
    ]);
  };

  return (
    <View style={styles.container}>
      {errorMsg ? (
        <Text>{errorMsg}</Text>
      ) : location ? (
        <MapView
          style={styles.map}
          initialRegion={{
            latitude: location.latitude,
            longitude: location.longitude,
            latitudeDelta: 0.0922,
            longitudeDelta: 0.0421,
          }}
        >
          <Marker
            coordinate={{
              latitude: location.latitude,
              longitude: location.longitude,
            }}
            title="Ваша локація"
          />
        </MapView>
      ) : (
        <Text>Завантаження локації...</Text>
      )}
      {location && (
        <Button title="Підтвердити локацію" onPress={confirmLocation} />
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  map: {
    flex: 1,
  },
});
