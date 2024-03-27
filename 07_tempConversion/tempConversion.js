const convertToCelsius = function(degrees) {
  degreesCelsius = (degrees - 32) * 5/9;
  degreesCelsius = +(degreesCelsius.toFixed(1))
  return degreesCelsius;
};

const convertToFahrenheit = function(degrees) {
  degreesFahrenheit = degrees * 9/5 + 32;
  degreesFahrenheit = +(degreesFahrenheit.toFixed(1))
  return degreesFahrenheit;
};

// Do not edit below this line
module.exports = {
  convertToCelsius,
  convertToFahrenheit
};
