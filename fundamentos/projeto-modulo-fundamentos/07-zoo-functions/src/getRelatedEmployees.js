const data = require('../data/zoo_data');

function isManager(id) {
  // seu código aqui
  // some() retornará se ao menos um elemento satisfaz a uma codição;
  // includes() retornará true se o elemento existir no array/objeto;
  return data.employees.some((element) => element.managers.includes(id));
}

function getRelatedEmployees(managerId) {
  // seu código aqui
  // retorne false se o id passado não for de um gerente;
  // colocando o managerId como parâmetro da função isManager para ser realizada a verificação;
  if (isManager(managerId) === false) {
    throw new Error('O id inserido não é de uma pessoa colaboradora gerente!');
  }
  // a variável recebe a um objeto.chave e filtra os elementos `managers` e verificaca se o elemento existe
  const idManagers = data.employees.filter((element) => element.managers.includes(managerId));
  // retorna um array contendo nome e sobrenome das pessoas colaboradoras que ela é responsável;
  return idManagers.map((element) => `${element.firstName} ${element.lastName}`);
}
console.log(getRelatedEmployees('fdb2543b-5662-46a7-badc-93d960fdc0a8'));

module.exports = { isManager, getRelatedEmployees };
