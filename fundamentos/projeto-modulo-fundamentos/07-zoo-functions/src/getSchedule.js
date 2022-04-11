const { species, hours } = require('../data/zoo_data');
const data = require('../data/zoo_data');

// Cria um objeto para receber as informações
const weeks = (elemento, exhibition) => {
  // elemento é o parâmetro que mais tarde recebera o dia da semana;
  const { [elemento]: { open, close } } = hours;
  return {
    officeHour: open === 0 ? 'CLOSED' : `Open from ${open}am until ${close}pm`,
    exhibition: open === 0 ? 'The zoo will be closed!' : exhibition,
  };
};

// Essa função verifica quais animais estão disponiveis naquele dia da semana
const weeksDays = (allDays) => {
  const obj = {};
  allDays.forEach((item) => {
    const exhibition = data.species.filter((element) => element.availability.includes(item))
      .map((item1) => item1.name);
      // Coloca como chave o dia da semana, logo após chama a função `weeks` e passa como parâmetro o dia da semana e a variavel que trás os nome dos animais;
    obj[item] = weeks(item, exhibition);
  });
  return obj;
};

// Essa função permite que ao passar o dia da semana como parametro traga o horario e os animais disponiveis;
const oneDay = (day) => {
  const obj = {};
  const exhibition = species.filter((elem) => elem.availability.includes(day))
    .map((index) => index.name);
    // Coloca como chave o dia da semana, logo após chama a função `weeks` e passa como parâmetro o dia da semana e a variavel que trás os nome dos animais;
  obj[day] = weeks(day, exhibition);
  return obj;
};

function getSchedule(scheduleTarget) {
  // Recebe como valor as chaves dos objetos(dia da semana);
  const allDays = Object.keys(hours);
  // Recebe como valor os nomes dos animais;
  const animals = species.map((item) => item.name);
  // Se um dia da semana for passado como parâmetro verifica se está incluso e retona os animais e horarios;
  if (allDays.includes(scheduleTarget)) {
    // Passa a variavel scheduleTarget como parâmetro;
    return oneDay(scheduleTarget);
  }
  // Se animals for passado como parâmetro verifica se esta incluso e retorna os dias;
  if (animals.includes(scheduleTarget)) {
    return species.find((animal) => animal.name === scheduleTarget).availability;
  }
  // Passa a variavel allDays como parâmetro;
  return weeksDays(allDays);
}

// console.log(getSchedule('lions'));

module.exports = getSchedule;
