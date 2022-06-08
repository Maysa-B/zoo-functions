const data = require('../data/zoo_data');

function getAnimalsOlderThan(animal, age) {
  const animals = data.species.find((current) => {
    if (current.name === animal) {
      return current;
    }
    return false;
  });

  const idades = animals.residents.every((current) => {
    if (current.age >= age) return true;
    return false;
  });

  return idades;
}

console.log(getAnimalsOlderThan('otters', 7));

module.exports = getAnimalsOlderThan;
