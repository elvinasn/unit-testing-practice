const Calculator = (() => {
  const checkIfNumbers = (x, y) => {
    if (typeof x !== "number" || typeof y !== "number") return false;
    return true;
  };
  const add = (first, second) => {
    if (checkIfNumbers(first, second)) return first + second;

    return "Args are in wrong format!";
  };
  const subtract = (first, second) => {
    if (checkIfNumbers(first, second)) return first - second;

    return "Args are in wrong format!";
  };
  const divide = (first, second) => {
    if (second == 0) return "Can't divide by 0!";

    if (checkIfNumbers(first, second)) return first / second;

    return "Args are in wrong format!";
  };
  const multiply = (first, second) => {
    if (checkIfNumbers(first, second)) return first * second;

    return "Args are in wrong format!";
  };

  return { add, subtract, divide, multiply };
})();

export default Calculator;
