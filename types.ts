import { Ionicons } from "@expo/vector-icons";

export type RootStackParamList = {
  SOS: undefined;
  Tabs: undefined;
  TowingRequestScreen: undefined;
  MapScreen: undefined;
  HelpScreen: undefined;
  FuelRequestScreen: undefined;
  TireReplacementScreen: undefined;
  EmergencyScreen: undefined;
};

export type Service = {
  id: number;
  name: string;
  action: string;
  icon: React.ComponentProps<typeof Ionicons>["name"];
};
