// const { species } = require('../data/zoo_data');
const data = require('../data/zoo_data');

function countAnimals(animal) {
  // seu código aqui
  if (animal === undefined) {
    // utilizei o reduce para trazer somente as informações necessarias
    const specieAnimal = data.species.reduce((acc, { name, residents }) => {
      acc[name] = residents.length;
      // acc recebe uma chave e é incrementado um valor `residents.length` que se refere a quant. de item do array;
      return acc; // adicona o retorno de de um objeto;
    }, {});
    return specieAnimal;
  }
  if (animal.sex) {
    return data.species
      // find é utilizado para procurar o primeiro `name` inserido no parâmetro;
      .find(({ name }) => name === animal.specie).residents
      // em seguida ao acessar a chave `residents` é utilizado o filter para filtrar a quant. da propriedade `sex` de acordo com o nome do parâmetro;
      .filter(({ sex }) => sex === animal.sex).length;
  }
  return data.species.find(({ name }) => name === animal.specie).residents.length;
}
// console.log(countAnimals());
// console.log(countAnimals({ specie: 'giraffes'}));
// console.log(countAnimals({ specie: 'bears', sex: 'female' }));

module.exports = countAnimals;
