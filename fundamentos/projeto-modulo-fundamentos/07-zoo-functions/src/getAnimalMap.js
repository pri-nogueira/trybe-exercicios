const data = require('../data/zoo_data');

function animalsMap() {
  const nameLocation = {
    NE: data.species.filter((element) => element.location === 'NE')
      .map((itens) => itens.name),
    NW: data.species.filter((element) => element.location === 'NW')
      .map((itens) => itens.name),
    SE: data.species.filter((element) => element.location === 'SE')
      .map((itens) => itens.name),
    SW: data.species.filter((element) => element.location === 'SW')
      .map((itens) => itens.name),
  };
  return nameLocation;
}


// const getAnimal = (elem, sex) => {
//   if (sex !== 0) {
//     return elem.residents.filter((animal) => animal.sex === sex).map((animal) => animal.name);
//   }

//   return elem.residents.map((animal) => animal.name);
// };

// console.log(getAnimal({ sex: 'female' }));

function getAnimalMap(options) {
  if (options === undefined) return animalsMap();
}
console.log(getAnimalMap());
module.exports = getAnimalMap;
