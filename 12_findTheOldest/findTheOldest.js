const findTheOldest = function(people) {
  let oldestAge = 0;
  let oldest;

  people.forEach(person => {
    const currentYear = new Date().getFullYear();
    let age = person.yearOfDeath ? person.yearOfDeath - person.yearOfBirth : new Date().getFullYear() - person.yearOfBirth;
    if (age > oldestAge) {
      oldest = person;
      oldestAge = age;
    }
  });

  return oldest;
};

// Do not edit below this line
module.exports = findTheOldest;
