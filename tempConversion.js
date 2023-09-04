const convertToCelsius = function() {
  let fahrenheit = 32;
  let celsius = (fahrenheit - 32) * 0.5556;
  celsius = celsius.toFixed(1);
  return celsius;
};

const convertToFahrenheit = function() {
  let celsius = 0;
  let fahrenheit = (celsius * 9/5) + 32;
  fahrenheit = fahrenheit.toFixed(1);
  return fahrenheit;
};

// Do not edit below this line
module.exports = {
  convertToCelsius,
  convertToFahrenheit
};


