import { Service } from "./types";

export const emergencyServices = [
  {
    id: 1,
    name: "Пожежна охорона",
    action: "Зателефонувати",
    icon: "flame-outline" as const,
    phoneNumber: "101",
  },
  {
    id: 2,
    name: "Поліція",
    action: "Зателефонувати",
    icon: "shield-checkmark-outline" as const,
    phoneNumber: "102",
  },
  {
    id: 3,
    name: "Швидка допомога",
    action: "Зателефонувати",
    icon: "heart-outline" as const,
    phoneNumber: "103",
  },
  {
    id: 4,
    name: "Аварійна служба газу",
    action: "Зателефонувати",
    icon: "flame-outline" as const,
    phoneNumber: "104",
  },
];

export const services: Service[] = [
  {
    id: 1,
    name: "Виклик евакуатора",
    action: "Замовити",
    icon: "car-outline",
  },
  {
    id: 2,
    name: "Підвезення палива",
    action: "Викликати",
    icon: "water-outline",
  },
  {
    id: 3,
    name: "Заміна покришки",
    action: "Викликати",
    icon: "construct-outline",
  },
];
