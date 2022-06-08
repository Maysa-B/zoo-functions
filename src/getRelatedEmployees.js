const data = require('../data/zoo_data');

function isManager(id) {
  const empregado = data.employees.some((current) => current.managers.some((atual) => {
    if (atual === id) return true;
    return false;
  }));

  return empregado;
}

function getRelatedEmployees(managerId) {
  const managerOrNo = isManager(managerId);

  if (managerOrNo === false) {
    throw new Error('O id inserido não é de uma pessoa colaboradora gerente!');
  }

  const subordinados = [];

  data.employees.map((current) => current.managers.find((atual) => {
    if (atual === managerId) {
      subordinados.push(`${current.firstName} ${current.lastName}`);
      return true;
    }
    return false;
  }));

  return subordinados;
}

module.exports = { isManager, getRelatedEmployees };
