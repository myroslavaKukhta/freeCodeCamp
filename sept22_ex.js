// Написання стислих оголошень літералів об’єктів за допомогою скороченої властивості об’єкта
const createPerson = (name, age, gender) => {
  // Змініть код лише під цим рядком
  return {
    name: name,
    age: age,
    gender: gender
  };
  // Змініть код лише над цим рядком
};

// Написання стислих декларативних функцій з ES6
// Змініть код лише під цим рядком
const bicycle = {
  gear: 2,
  setGear: function(newGear) {
    this.gear = newGear;
  }
};
// Змініть код лише над цим рядком
bicycle.setGear(3);
console.log(bicycle.gear);

// Синтаксис class для визначення конструктурної функції
// Змініть код лише під цим рядком
class Vegetable {
  constructor(name) {
    this.name = name;
  }
}
// Змініть код лише над цим рядком

const carrot = new Vegetable('carrot');
console.log(carrot.name); // Повинно показувати 'carrot'

// Змініть код лише під цим рядком
class Thermostat {
  constructor(fahrenheit) {
    this._fahrenheit = fahrenheit;
  }
  
  get temperature() {
    return (5 / 9) * (this._fahrenheit - 32);
  }
  
  set temperature(celsius) {
    return this._fahrenheit = (celsius * 9.0) / 5 + 32;
  }
}
// Змініть код лише над цим рядком

// Гетери й сетери для управління доступом до об’єкта
const thermos = new Thermostat(76); // Налаштування у шкалі Фаренгейта
let temp = thermos.temperature; // 24.44 градусів за Цельсієм
thermos.temperature = 26;
temp = thermos.temperature; // 26 градусів за Цельсієм

// Створення модульного скрипту
<html>
  <body>
    <!-- add your code below -->
    <script type="module" src="index.js"></script>
    <!-- add your code above -->
  </body>
</html>

// Використання export для спільного використання блоку коду
const uppercaseString = (string) => {
  return string.toUpperCase();
}

const lowercaseString = (string) => {
  return string.toLowerCase()
}
export { uppercaseString, lowercaseString } from './string_functions.js';

// Повторне використання коду JavaScript за допомогою import
import { uppercaseString, lowercaseString } from './string_functions.js';
// Змініть код лише над цим рядком

uppercaseString("hello");
lowercaseString("WORLD!");