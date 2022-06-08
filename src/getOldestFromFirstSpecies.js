const data = require('../data/zoo_data');

function getOldestFromFirstSpecies(id) {
  const funcionario = data.employees.find((current) => current.id === id);

  const IdAnimal = funcionario.responsibleFor[0];
  const animal = data.species.find((current) => current.id === IdAnimal);

  const age = animal.residents.reduce((acc, current) => {
    if (current.age > acc) return current.age;
    return acc;
  }, 0);

  const rightOne = animal.residents.find((current) => current.age === age);

  return [rightOne.name, rightOne.sex, rightOne.age];
}

module.exports = getOldestFromFirstSpecies;
