const data = require('../data/zoo_data');

function getSpeciesByIds(...ids) {
  // seu código aqui
  // Caso receba nenhum parâmetro, necessário retornar um array vazio;
  // const expected = [];
  // return expected;
  const idsSpecies = data.species.filter((species) => ids.includes(species.id));
  return idsSpecies;
}

module.exports = getSpeciesByIds;
