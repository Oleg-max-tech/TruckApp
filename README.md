# SOS App

Це мобільний додаток на React Native для екстрених служб SOS. Додаток надає користувачам швидкий доступ до екстрених контактів і дозволяє здійснювати дзвінки в різні екстрені служби одним дотиком.

## Функції

- **Список екстрених служб**: Відображення списку екстрених служб, таких як поліція, пожежна частина, швидка допомога тощо.
- **Анімація SOS**: Кнопка з плавною анімацією, яка активується при натисканні, що символізує екстрений виклик.
- **Система сповіщень**: Підтвердження екстреного дзвінка перед його здійсненням.
- **Підтримка різних екстрених служб**: Додаток підтримує різні екстрені служби з різними номерами телефонів та іконками.

## Інструкція з установки

Щоб налаштувати проєкт, виконайте наступні кроки:

1. **Клонувати репозиторій**:
   ```bash
   git clone https://github.com/Oleg-max-tech/TruckApp.git
   ```

Проєкт має таку структуру:

.
├── App.js # Головний вхідний файл додатку
├── Screens # Екрани додатку (наприклад, EmergencyScreen, SOSAnimationScreen)
├── service # Дані про екстрені служби
├── components # Спільні компоненти, такі як кнопки, іконки тощо
├── styles # Спільні стилі, що використовуються у всьому додатку
└── assets # Зображення та інші ресурси
