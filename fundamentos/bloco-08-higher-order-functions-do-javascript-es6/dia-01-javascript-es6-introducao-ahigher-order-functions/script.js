// Exercicio 1
// 1 - Crie uma função que retorne um objeto no formato { nomeCompleto, email } representando uma nova pessoa contratada. 
const people = (nome) => {
  const email = nome.toLowerCase().replace(/ /g, '_');
  return { nome, email: `${email}@trybe.com` };
};
// 2 - Passe sua função como parâmetro da HOF newEmployees para criar cada pessoa contratada em seu respectivo id . 
// 3 - A sua função deve receber como parâmetro o nome completo da pessoa funcionária e a partir dele gerar automaticamente um email no formato nome_da_pessoa@trybe.com .
const newEmployees = (callBack) => {
  const employees = {
    id1: callBack('Pedro Guerra'), // Nome: Pedro Guerra -> Chame sua função passando o nome Pedro Guerra como parâmetro, substituindo as aspas
    id2: callBack('Luiza Drumond'), // Nome: Luiza Drumond -> Chame sua função passando o nome Luiza Drumond como parâmetro, substituindo as aspas
    id3: callBack('Carla Paiva'), // Nome: Carla Paiva -> Chame sua função passando o nome Carla Paiva como parâmetro, substituindo as aspas
  }
  return employees;
};

console.log(newEmployees(people));

// Exercicio 2
// 1 - Desenvolva uma HOF que retorna o resultado de um sorteio. 
// 2 - Esta HOF irá gerar um número aleatório entre 1 e 5 recebendo como parâmetros o número apostado e uma função que checa se o número apostado é igual ao número sorteado. O retorno da sua HOF deve ser uma string (Ex: "Tente novamente" ou "Parabéns você ganhou").
const numberCerto = (myNumber, number) => myNumber === number;
const numberLoteria = (myNumber, callback) => {
  const number = Math.floor((Math.random() * 5) + 1);
  return callback(myNumber, number) ? 'Parabéns você ganhou' : 'Tente novamente';
};
console.log(numberLoteria(3, numberCerto));

// Exercicio 3
// 1 - Crie uma HOF que receberá três parâmetros. O primeiro será um array de respostas corretas (Gabarito), o segundo será um array de respostas a serem verificadas (respostas da pessoa estudante) e o terceiro é uma função que checa se as respostas estão corretas e faz a contagem da pontuação final recebida pela pessoa estudante. 
// 2 - Ao final a HOF deve retornar o total da contagem de respostas certas.
// 3 - Quando a resposta for correta a contagem sobe 1 ponto, quando for incorreta desce 0.5 pontos, e quando não houver resposta ("N.A") não altera-se a contagem.
const RIGHT_ANSWERS = ['A', 'C', 'B', 'D', 'A', 'A', 'D', 'A', 'D', 'C'];
const STUDENT_ANSWERS = ['A', 'N.A', 'B', 'D', 'A', 'C', 'N.A', 'A', 'D', 'B'];
const toCompare = (rightAnswers, studentAnswers) => {
  if (rightAnswers === studentAnswers) {
    return 1;
  } if (studentAnswers === 'N.A') {
    return 0;
  }
  return -0.5
}

const countPoint = (rightAnswers, studentAnswers, callback) => {
  let point = 0;
  for (let i = 0; i <= rightAnswers.length; i += 1) {
    const result = callback(rightAnswers[i], studentAnswers[i]);
    point += result;
  }
  return `Resultado final: ${point} pontos`;
};
console.log(countPoint(RIGHT_ANSWERS, STUDENT_ANSWERS, toCompare));
