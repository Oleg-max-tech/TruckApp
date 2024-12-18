import { Service } from "./types";

export const emergencyServices = [
  {
    id: 1,
    name: "Пожежна охорона",
    actionButtonLabel: "Зателефонувати",
    icon: "flame-outline" as const,
    phoneNumber: "101",
  },
  {
    id: 2,
    name: "Поліція",
    actionButtonLabel: "Зателефонувати",
    icon: "shield-checkmark-outline" as const,
    phoneNumber: "102",
  },
  {
    id: 3,
    name: "Швидка допомога",
    actionButtonLabel: "Зателефонувати",
    icon: "heart-outline" as const,
    phoneNumber: "103",
  },
  {
    id: 4,
    name: "Аварійна служба газу",
    actionButtonLabel: "Зателефонувати",
    icon: "flame-outline" as const,
    phoneNumber: "104",
  },
];

export const services: Service[] = [
  {
    id: 1,
    name: "Виклик евакуатора",
    actionButtonLabel: "Замовити",
    icon: "car-outline",
  },
  {
    id: 2,
    name: "Підвезення палива",
    actionButtonLabel: "Викликати",
    icon: "water-outline",
  },
  {
    id: 3,
    name: "Заміна покришки",
    actionButtonLabel: "Викликати",
    icon: "construct-outline",
  },
];
