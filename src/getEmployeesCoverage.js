const data = require('../data/zoo_data');

function animalsCovered(fulano) {
  const animalsZoo = data.species.map((element) => element);
  const animals = fulano.responsibleFor.map((current) => animalsZoo.find((element) => {
    if (element.id === current) return true;
    return false;
  }));

  const names = animals.map((element) => element.name);
  const location = animals.map((element) => element.location);

  return {
    id: `${fulano.id}`,
    fullName: `${fulano.firstName} ${fulano.lastName}`,
    species: names,
    locations: location,
  };
}

function allCoverage() {
  const result = data.employees.map((element) => animalsCovered(element));
  return result;
}

function getEmployeesCoverage(fulano) {
  if (fulano === undefined) return allCoverage();

  const whoIs = data.employees.find((current) => {
    if (fulano.name === current.lastName
      || fulano.name === current.firstName
      || fulano.id === current.id) return true;
    return false;
  });

  if (whoIs === undefined) throw new Error('Informações inválidas');

  return animalsCovered(whoIs);
}

console.log(getEmployeesCoverage());

module.exports = getEmployeesCoverage;
