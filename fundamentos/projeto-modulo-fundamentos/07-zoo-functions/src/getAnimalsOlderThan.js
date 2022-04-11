const data = require('../data/zoo_data');

function getAnimalsOlderThan(animal, age) {
  // seu código aqui
  const nameAndAge = data.species.find((element) => element.name === animal);
  return nameAndAge.residents.every((element) => element.age >= age);
}
// console.log(getAnimalsOlderThan('lions', 14));
module.exports = getAnimalsOlderThan;
