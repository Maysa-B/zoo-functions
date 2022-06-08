const data = require('../data/zoo_data');

const allLocations = () => {
  const NE = [];
  const NW = [];
  const SE = [];
  const SW = [];

  data.species.forEach((element) => {
    const local = element.location;
    if (local === 'NE') NE.push(element.name);
    if (local === 'NW') NW.push(element.name);
    if (local === 'SE') SE.push(element.name);
    if (local === 'SW') SW.push(element.name);
  });

  return { NE, NW, SE, SW };
};

const includingNames = () => {
  const NE = [];
  const NW = [];
  const SE = [];
  const SW = [];
  data.species.forEach((element) => {
    const local = element.location;
    if (local === 'NE') {
      NE.push({ [element.name]: element.residents.map((current) => current.name) });
    } else if (local === 'NW') {
      NW.push({ [element.name]: element.residents.map((current) => current.name) });
    } else if (local === 'SE') {
      SE.push({ [element.name]: element.residents.map((current) => current.name) });
    } else if (local === 'SW') {
      SW.push({ [element.name]: element.residents.map((current) => current.name) });
    }
  });
  return { NE, NW, SE, SW };
};

const namesOrdenados = () => {
  const NE = [];
  const NW = [];
  const SE = [];
  const SW = [];
  data.species.forEach((element) => {
    const local = element.location;
    if (local === 'NE') {
      NE.push({ [element.name]: element.residents.map((current) => current.name).sort() });
    } else if (local === 'NW') {
      NW.push({ [element.name]: element.residents.map((current) => current.name).sort() });
    } else if (local === 'SE') {
      SE.push({ [element.name]: element.residents.map((current) => current.name).sort() });
    } else if (local === 'SW') {
      SW.push({ [element.name]: element.residents.map((current) => current.name).sort() });
    }
  });
  return { NE, NW, SE, SW };
};

const apenasForS = (residentes, sex) => {
  const result = residentes.filter((current) => {
    if (current.sex === sex) return true;
    return false;
  });

  return result.map((current) => current.name);
};

const maleFemaleLocal = (sex) => {
  const NE = [];
  const NW = [];
  const SE = [];
  const SW = [];
  data.species.forEach((element) => {
    const local = element.location;
    if (local === 'NE') {
      NE.push({ [element.name]: apenasForS(element.residents, sex) });
    } else if (local === 'NW') {
      NW.push({ [element.name]: apenasForS(element.residents, sex) });
    } else if (local === 'SE') {
      SE.push({ [element.name]: apenasForS(element.residents, sex) });
    } else if (local === 'SW') {
      SW.push({ [element.name]: apenasForS(element.residents, sex) });
    }
  });
  return { NE, NW, SE, SW };
};

const maleFemalSort = (sex) => {
  const NE = [];
  const NW = [];
  const SE = [];
  const SW = [];
  data.species.forEach((element) => {
    const local = element.location;
    if (local === 'NE') {
      console.log(NE.push({ [element.name]: apenasForS(element.residents, sex).sort() }));
    } else if (local === 'NW') {
      NW.push({ [element.name]: apenasForS(element.residents, sex).sort() });
    } else if (local === 'SE') {
      SE.push({ [element.name]: apenasForS(element.residents, sex).sort() });
    } else if (local === 'SW') {
      SW.push({ [element.name]: apenasForS(element.residents, sex).sort() });
    }
  });
  console.log(NE, NW, SE, SW);
  return { NE, NW, SE, SW };
};

function callNextSorted(options) {
  if (options.sorted === true && typeof options.sex === 'string') return maleFemalSort(options.sex);
  return namesOrdenados();
}

function callNextIncludeNames(options) {
  if (typeof options.sex === 'string') return maleFemaleLocal(options.sex);
  return includingNames();
}

function getAnimalMap(options) {
  if (options === undefined || options.includeNames !== true) return allLocations();
  if (options.sorted === true) return callNextSorted(options);
  if (options.includeNames === true) return callNextIncludeNames(options);
}

module.exports = getAnimalMap;
