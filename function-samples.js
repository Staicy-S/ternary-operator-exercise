// Erste Funktionsschreibweise
function formatResult(result) {
  return `Result: ${result}`;
}
const result = formatResult("Hallo");
console.log(result);

// Zweite Funktionsschreibweise
const formatResultWithArrowFunction = (result) => {
  return `Result: ${result}`;
};

// Dritte Variante
const directReturn = (result) => `Result: ${result}`;
