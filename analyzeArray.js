function analyzeArray(array) {
  return {
    max: Math.max(...array),
    min: Math.min(...array),
    length: array.length,
    average: array.reduce((a, b) => a + b, 0) / array.length,
  };
}

export default analyzeArray;
