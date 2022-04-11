const data = require('../data/zoo_data');

function getEmployeeByName(employeeName) {
  // seu código aqui
  if (employeeName === undefined) return {};
  return data.employees.find((item) =>
    item.firstName === employeeName || item.lastName === employeeName);
}
// console.log(getEmployeeByName('Bethea'));
module.exports = getEmployeeByName;
