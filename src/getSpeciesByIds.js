// primeiro requisito
const data = require('../data/zoo_data');

function getSpeciesByIds(...ids) {
  const result = [];

  const comparar = ids.map((id) => data.species.filter((current) => {
    if (current.id === id) result.push(current);
    return current;
  }));

  if (comparar === undefined) {
    return [];
  }

  return result;
}

console.log(getSpeciesByIds());

module.exports = getSpeciesByIds;
