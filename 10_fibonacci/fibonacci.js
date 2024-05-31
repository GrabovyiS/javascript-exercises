const fibonacci = function(number) {
  number = +number;
  if (number < 0) {
    return "OOPS";
  }

  if (number === 0) {
    return 0;
  }

  if (number === 1) {
    return 1;
  }

  if (number === 2) {
    return 1;
  }
  
  let currentNumber = 1;
  let previousNumber = 1;
  // Starting from the third number
  for (let i = 2; i < number; i++) 
  {
    let newCurrentNumber = currentNumber + previousNumber;
    previousNumber = currentNumber;
    currentNumber = newCurrentNumber;
  }

  return currentNumber;
};

// Do not edit below this line
module.exports = fibonacci;
