const add = function(termOne, termTwo) {
  return termOne + termTwo;
};

const subtract = function(minuend, subtrahend) {
  return minuend - subtrahend;
};

const sum = function(array) {
  return array.reduce((total, currentItem) => (total + currentItem), 0);
};

const multiply = function(array) {
  return array.reduce((product, currentItem) => (product * currentItem), 1);
};

const power = function(base, exponent) {
  return base ** exponent;
};

const factorial = function(number) {
  if (number === 1 || number === 0) {
    return 1;
  }

  return factorial(number - 1) * number
};

// Do not edit below this line
module.exports = {
  add,
  subtract,
  sum,
  multiply,
  power,
  factorial
};
