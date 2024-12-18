import React, { FC, useEffect } from "react";
import { View, Text, StyleSheet, TouchableOpacity } from "react-native";
import { useSOSAnimation } from "./animated";
import { StackScreenProps } from "@react-navigation/stack";
import { RootStackParamList } from "../../types";
import Animated from "react-native-reanimated";

type SosScreenNavigationProp = StackScreenProps<RootStackParamList, "SOS">;

const SosScreen: FC<SosScreenNavigationProp> = ({ navigation }) => {
  const { reanimatedStyle, startAnimation } = useSOSAnimation();

  useEffect(() => {
    startAnimation();
  }, []);

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Emergency SOS</Text>
      <Animated.View
        style={[
          { height: 150, width: 150, backgroundColor: "#fff" },
          reanimatedStyle,
        ]}
      >
        <TouchableOpacity
          style={styles.touchableArea}
          onPress={() => navigation.navigate("Tabs")}
        >
          <Text style={styles.sosButtonText}>SOS</Text>
        </TouchableOpacity>
      </Animated.View>
    </View>
  );
};

export default SosScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#ff4d4d",
    padding: 20,
  },
  title: {
    fontSize: 36,
    fontWeight: "bold",
    color: "#fff",
    marginBottom: 40,
    textAlign: "center",
  },
  touchableArea: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  sosButtonText: {
    fontSize: 48,
    fontWeight: "bold",
    color: "#ff4d4d",
  },
});
