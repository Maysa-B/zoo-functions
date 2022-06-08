const data = require('../data/zoo_data');

function getEmployeeByName(employeeName) {
  const funcionario = data.employees.find((current) => {
    if (current.firstName === employeeName || current.lastName === employeeName) {
      return current;
    }
    return false;
  });

  if (funcionario === undefined) return {};

  return funcionario;
}

console.log(getEmployeeByName('Emery'));

module.exports = getEmployeeByName;
