const palindromes = function (string) {
  string = string.replace(/[!\.\?,\s]/g, '');
  reversedString = string.split('').reverse().join('');
  
  if (string.toLowerCase() === reversedString.toLowerCase()) {
    return true;
  }
  return false;
};

// Do not edit below this line
module.exports = palindromes;
