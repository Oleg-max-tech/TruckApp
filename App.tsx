import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import SosScreen from "./Screens/SosScreen/SosScreen";
import TabsScreen from "./Screens/TabsScreen";
import TowingRequestScreen from "./Screens/HelpScreen/TowingRequestScreen";
import MapScreen from "./Screens/MapScreen";
import HelpScreen from "./Screens/HelpScreen/HelpScreen";
import FuelRequestScreen from "./Screens/HelpScreen/FuelRequestScreen";
import TireReplacementScreen from "./Screens/HelpScreen/TireReplacementScreen";
import { RootStackParamList } from "./types";

const Stack = createNativeStackNavigator<RootStackParamList>();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="SOS"
          component={SosScreen}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="Tabs"
          component={TabsScreen}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="TowingRequestScreen"
          component={TowingRequestScreen}
          options={{ title: "Запит на евакуатор" }}
        />
        <Stack.Screen
          name="MapScreen"
          component={MapScreen}
          options={{ title: "Карта" }}
        />
        <Stack.Screen
          name="HelpScreen"
          component={HelpScreen}
          options={{
            title: "Допомога",
          }}
        />
        <Stack.Screen
          name="FuelRequestScreen"
          component={FuelRequestScreen}
          options={{ title: "Заправка" }}
        />
        <Stack.Screen
          name="TireReplacementScreen"
          component={TireReplacementScreen}
          options={{ title: "Заміна шин" }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
