const data = require('../data/zoo_data');

function countEntrants(entrants) {
  const all = entrants.map((current) => current.age);
  let child = 0;
  let adult = 0;
  let senior = 0;

  all.forEach((current) => {
    if (current < 18) child += 1;
    if (current >= 18 && current < 50) adult += 1;
    if (current >= 50) senior += 1;
  });

  return { child, adult, senior };
}

function calculateEntry(entrants) {
  if (entrants === undefined) return 0;
  if (Object.keys(entrants).length === 0) return 0;

  const result = countEntrants(entrants);
  let total = 0;
  const { adult, senior, child } = data.prices;
  total += result.adult * adult;
  total += result.child * child;
  total += result.senior * senior;

  return total;
}

console.log(calculateEntry({}));

module.exports = { calculateEntry, countEntrants };
