import { useState, useEffect } from "react";
import * as Location from "expo-location";
import { useNavigation } from "@react-navigation/native";
import { StackNavigationProp } from "@react-navigation/stack";
import { RootStackParamList } from "../types";

export function useUserLocation() {
  const [location, setLocation] = useState<{
    latitude: number;
    longitude: number;
  } | null>(null);
  const [errorMsg, setErrorMsg] = useState<string | null>(null);
  const navigation =
    useNavigation<StackNavigationProp<RootStackParamList, "HelpScreen">>();

  useEffect(() => {
    (async () => {
      let { status, canAskAgain } =
        await Location.requestForegroundPermissionsAsync();

      if (status !== "granted") {
        setErrorMsg("Надайте доступ до геолокації для продовження роботи.");
        setTimeout(() => {
          navigation.navigate("HelpScreen");
        });
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

  return { location, errorMsg };
}
