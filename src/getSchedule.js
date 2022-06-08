const data = require('../data/zoo_data');

const { Tuesday, Wednesday, Thursday, Friday, Saturday, Sunday, Monday } = data.hours;
const days = [Tuesday, Wednesday, Thursday, Friday, Saturday, Sunday, Monday];
const dayStrings = ['Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday', 'Monday'];
const animals = data.species;
const nameAnimals = animals.map((current) => current.name);

const allWeekProgram = () => {
  const obj = {};
  days.forEach((day, id) => {
    if (day.close === 0) {
      obj[dayStrings[id]] = { officeHour: 'CLOSED', exhibition: 'The zoo will be closed!' };
    } else {
      obj[dayStrings[id]] = {
        officeHour: `Open from ${day.open}am until ${day.close}pm`,
        exhibition: animals.filter((current) => {
          if (current.availability.includes(dayStrings[id])) return true;
          return false;
        }).map((current) => current.name),
      };
    }
  });
  return obj;
};

const agendaAnimal = (scheduleTarget) => {
  const animalFind = animals.find((current) => current.name === scheduleTarget);
  const result = animalFind.availability;
  return result;
};

const program = (day, id) => {
  const obj = {};

  if (day.close === 0) {
    obj[dayStrings[id]] = { officeHour: 'CLOSED', exhibition: 'The zoo will be closed!' };
  } else {
    obj[dayStrings[id]] = {
      officeHour: `Open from ${day.open}am until ${day.close}pm`,
      exhibition: animals.filter((current) => {
        if (current.availability.includes(dayStrings[id])) return true;
        return false;
      }).map((current) => current.name),
    };
  }

  return obj;
};

const agendaDay = (scheduleTarget) => {
  let resposta;

  days.forEach((day, id) => {
    if (dayStrings[id] === scheduleTarget) {
      resposta = program(day, id);
    }
  });

  return resposta;
};

const getNext = (scheduleTarget) => {
  if (nameAnimals.includes(scheduleTarget) === true) return agendaAnimal(scheduleTarget);
  return agendaDay(scheduleTarget);
};

function getSchedule(scheduleTarget) {
  if (scheduleTarget === undefined) return allWeekProgram();
  if (nameAnimals.includes(scheduleTarget) === false
    && dayStrings.includes(scheduleTarget) === false) return allWeekProgram();
  return getNext(scheduleTarget);
}

module.exports = getSchedule;
