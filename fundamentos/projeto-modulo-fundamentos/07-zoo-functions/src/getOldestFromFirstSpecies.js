const data = require('../data/zoo_data');

function getOldestFromFirstSpecies(id) {
  // const idEmployees = data.employees.filter((element) => id.includes(element.id)) *Primeira const utlizada - Utilizei ela para filtrar os id e verificar se estava incluso na chave `employees`;
  // Aqui eu usei u find parar pegar o primeiro animal de acordo com o `id` do funcionario;
  const idEmployees = data.employees.find((element) => element.id === id).responsibleFor[0];
  // Nesta etapa ainda utilizei o find para buscar o primeio elemento que seja igual ao primeiro elemento da `const idEmployees`;
  const animalsSpecies = data.species.find((element) => element.id === idEmployees).residents; // console.log(animalsSpecies);
  // Utilizei o sort ordenar o array de acordo com o criterio estabelecido, no caso retornar o animal mais velho por isso `b - a ` se fosse o mais novo seria `a - b`;
  const firstOldestAnimal = animalsSpecies.sort((a, b) => b.age - a.age)[0];
  return [firstOldestAnimal.name, firstOldestAnimal.sex, firstOldestAnimal.age];
}
// console.log(getOldestFromFirstSpecies('c5b83cb3-a451-49e2-ac45-ff3f54fbe7e1'));

module.exports = getOldestFromFirstSpecies;
