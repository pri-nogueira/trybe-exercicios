const data = require('../data/zoo_data');

const employeesData = data.employees.map((infoEmployees) => {
  const info = {
    id: infoEmployees.id, // id da pessoa
    fullName: `${infoEmployees.firstName} ${infoEmployees.lastName}`, // nome completo: firstName + lastName
    species: infoEmployees.responsibleFor.map((idAnimal) =>
      data.species.find((element) => element.id === idAnimal).name), // espécies as quais a pessoa é responsável
    locations: infoEmployees.responsibleFor.map((idAnimal) =>
      data.species.find((element) => element.id === idAnimal).location), // Um array contendo todas as localizações das espécies
  };
  return info;
});

function verification(idEmployees) {
  const check = employeesData.find((element) =>
    element.fullName.includes(idEmployees.name) || element.id === idEmployees.id);
  return check;
}

function getEmployeesCoverage(id) {
  if (id === undefined) return employeesData;
  if (!verification(id)) {
    throw new Error('Informações inválidas');
  }
  return verification(id);
}
// console.log(getEmployeesCoverage({ id: 'Id inválido' }));
console.log(getEmployeesCoverage());
module.exports = getEmployeesCoverage;
