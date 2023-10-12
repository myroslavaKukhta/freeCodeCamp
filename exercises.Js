// Деструктуризація через залишкові елементи
function removeFirstTwo(list) {
  return list;
}

const source = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
const sourceWithoutFirstTwo = removeFirstTwo(source);

// Деструктуроване присвоєння для передачі об’єкта як параметра функції
const stats = {
  max: 56.78,
  standard_deviation: 4.34,
  median: 34.54,
  mode: 23.87,
  min: -0.75,
  average: 35.85
};

const half = (stats) => (stats.max + stats.min) / 2.0; 

// Створення рядків за допомогою шаблонних літералів
const result = {
  success: ["max-length", "no-amd", "prefer-arrow-functions"],
  failure: ["no-var", "var-on-top", "linebreak"],
  skipped: ["no-extra-semi", "no-dup-keys"]
};
function makeList(arr) {
  // Змініть код лише під цим рядком
  const failureItems = [];
  // Змініть код лише над цим рядком

  return failureItems;
}

const failuresList = makeList(result.failure);



