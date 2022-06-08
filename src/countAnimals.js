const data = require('../data/zoo_data');

function maleOrFemale(sex, specie) {
  return specie.residents.reduce((acc, current) => {
    if (current.sex === sex) {
      const result = acc + 1;
      return result;
    }
    return acc;
  }, 0);
}

function allSpecies() {
  const keys = data.species.map((current) => current.name);
  const values = data.species.map((current) => current.residents.length);
  const objeto = {};

  keys.forEach((current, id) => {
    objeto[current] = values[id];
  });

  return objeto;
}

function countAnimals(animal) {
  if (animal === undefined) {
    return allSpecies();
  }

  const specie = data.species.find((current) => {
    if (current.name === animal.specie) return true;
    return false;
  });

  if (Object.keys(animal).length === 1) {
    return specie.residents.length;
  }

  if (Object.keys(animal).length > 1) {
    return maleOrFemale(animal.sex, specie);
  }
}

console.log(countAnimals());

module.exports = countAnimals;
