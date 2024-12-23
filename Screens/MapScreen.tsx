import React, { useCallback } from "react";
import { View, Text, Button, StyleSheet, Alert } from "react-native";
import MapView, { Marker } from "react-native-maps";
import { useNavigation } from "@react-navigation/native";
import { StackNavigationProp } from "@react-navigation/stack";
import { useUserLocation } from "../hooks/useUserLocation";

import { RootStackParamList } from "../types";

type MapScreenNavigationProp = StackNavigationProp<
  RootStackParamList,
  "MapScreen"
>;

export default function MapScreen() {
  const navigation = useNavigation<MapScreenNavigationProp>();
  const { location, errorMsg } = useUserLocation();

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

  const MainContent = useCallback(() => {
    if (errorMsg) {
      return <Text>{errorMsg}</Text>;
    }
    if (location) {
      return (
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
      );
    } else {
      return <Text>Завантаження локації...</Text>;
    }
  }, [errorMsg, location]);

  return (
    <View style={styles.container}>
      <MainContent />

      <View style={styles.buttonContainer}>
        <Button title="Підтвердити локацію" onPress={confirmLocation} />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "flex-end",
  },
  map: {
    flex: 1,
  },
  buttonContainer: {
    position: "absolute",
    bottom: 0,
    left: 0,
    right: 0,
    backgroundColor: "#f5f5f5",
    paddingBottom: 20,
  },
});
