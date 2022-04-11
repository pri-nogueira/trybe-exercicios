const data = require('../data/zoo_data');

function countEntrants(entrants) {
  if (entrants === undefined || Object.keys(entrants).length === 0) return 0;
  // criei im objeto com os criterios pedidos;
  const countEntrant = {
    child: entrants.filter((element) => element.age < 18).length,
    adult: entrants.filter((element) => element.age >= 18 && element.age < 50).length,
    senior: entrants.filter((element) => element.age >= 50).length,
  };
  return countEntrant;
}

function calculateEntry(entrants) {
  const peopleEntrants = countEntrants(entrants);
  if (peopleEntrants === 0) return 0;
  const peopleChild = peopleEntrants.child * data.prices.child;
  const peopleAdult = peopleEntrants.adult * data.prices.adult;
  const peopleSenior = peopleEntrants.senior * data.prices.senior;
  const total = peopleChild + peopleAdult + peopleSenior;
  return total;
}
module.exports = { calculateEntry, countEntrants };
