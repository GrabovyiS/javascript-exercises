const sumAll = function(startNumber, endNumber) {
  if (startNumber < 0 || endNumber < 0) {
    return 'ERROR';
  }

  if (typeof(startNumber) !== 'number' || typeof(endNumber) !== 'number') {
    return 'ERROR';
  }

  if (startNumber > endNumber) {
    let t = startNumber;
    startNumber = endNumber;
    endNumber = t; 
  }

  let sum = 0;
  for (let i = startNumber; i <= endNumber; i++) {
    sum += i;
  }
  return sum;
};

// Do not edit below this line
module.exports = sumAll;
