// Desafio 1
function compareTrue(value1, value2) {
  // seu código aqui
  if (value1 === true && value2 === true) {
    return true;
  } else {
    return false;
  }
}

// Desafio 2
function calcArea(base, heigth) {
  // seu código aqui
  let resultado = (base * heigth) / 2;
  return resultado;
}
console.log(calcArea(10, 50));
console.log(calcArea(5, 2));
console.log(calcArea(51, 1));

// Desafio 3
function splitSentence(value) {
  // seu código aqui
  let resultado;
  let string;
  if (string = value) {
    resultado = value.split(' ');
  }
  return resultado;
}
console.log(splitSentence('go Trybe'));
console.log(splitSentence('vamo que vamo'));
console.log(splitSentence('foguete'));

// Desafio 4
function concatName(array) {
  //seu código aqui
  let myArray = [];
  let resultado;
  if (myArray = array) {
    let primeiroArray = array[0];
    let ultimoArray = array[array.length - 1];
    resultado = ultimoArray + ', ' + primeiroArray;
  }
  return resultado;
}
console.log(concatName(['Lucas', 'Cassiano', 'Ferraz', 'Paolillo']));
console.log(concatName(['foguete', 'não', 'tem', 'ré']));
console.log(concatName(['captain', 'my', 'captain']));

// Desafio 5
function footballPoints(wins, ties) {
  // seu código aqui
  let resultado = (wins * 3) + ties;

  return resultado;
}
console.log(footballPoints(14, 8) + ' pontos');
console.log(footballPoints(1, 2) + ' pontos');
console.log(footballPoints(0, 0) + ' pontos');
// Desafio 6
function highestCount(arrayRepetidos) {
  // seu código aqui
  let resultado = 0;
  for (let index in arrayRepetidos) {
    if (arrayRepetidos[index] == Math.max(...arrayRepetidos)) {
      resultado += 1
    }
  }
  return resultado;
}
console.log(highestCount([9, 1, 2, 3, 9, 5, 7]));
console.log(highestCount([0, 4, 4, 4, 9, 2, 1]));
console.log(highestCount([0, 0, 0]));

// Desafio 7
function catAndMouse(mouse, cat1, cat2) {
  // seu código aqui
  let resultado = " "
  if (Math.abs(mouse - cat2) < Math.abs(mouse - cat1)) {
    resultado = 'cat2';
  } else if (Math.abs(mouse - cat1) < Math.abs(mouse - cat2)) {
    resultado = 'cat1';
  } else {
    resultado = 'os gatos trombam e o rato foge';
  }
  return resultado
}
console.log(catAndMouse(0, 3, 2));
console.log(catAndMouse(10, 4, 22));
console.log(catAndMouse(1, 0, 2));

// Desafio 8
function fizzBuzz(matriz) {
  // seu código aqui
  let resultado = [];
  for (let i = 0; i < matriz.length; i += 1) {
    if ((matriz[i] % 3 == 0) && (matriz[i] % 5 == 0)) {
      resultado.push('fizzBuzz');
    } else if ((matriz[i] % 3 == 0) && (matriz[i] % 5 > 0)) {
      resultado.push('fizz');
    } else if ((matriz[i] % 3 > 0) && (matriz[i] % 5 == 0)) {
      resultado.push('buzz');
    } else {
      resultado.push('bug!');
    }
  }
  return resultado;
}
console.log(fizzBuzz([2, 15, 7, 9, 45]));
console.log(fizzBuzz([7, 9]));
console.log(fizzBuzz([9, 25]));

// Desafio 9
function encode(frase) {
  // seu código aqui
  let fraseCodificada = frase.replace(/a/gi, '1');
  fraseCodificada = fraseCodificada.replace(/e/gi, '2');
  fraseCodificada = fraseCodificada.replace(/i/gi, '3');
  fraseCodificada = fraseCodificada.replace(/o/gi, '4');
  fraseCodificada = fraseCodificada.replace(/u/gi, '5');

  return fraseCodificada;
}
console.log(encode('hi there!'));

function decode(frase2) {
  // seu código aqui
  let fraseCod = frase2.replace(/1/gi, 'a');
  fraseCod = fraseCod.replace(/2/gi, 'e');
  fraseCod = fraseCod.replace(/3/gi, 'i');
  fraseCod = fraseCod.replace(/4/gi, 'o');
  fraseCod = fraseCod.replace(/5/gi, 'u');

  return fraseCod;
}
console.log(decode('h3 th2r2!'));

// Desafio 10
function techList(tech, nome) {
  // seu código aqui
  let lista = [];
  
  if(tech.length === 0){
    return 'Vazio!'
  }
  let listTech = tech.sort();
  for (let i = 0; i < tech.length; i += 1) {
    let objeto = {
      tech: listTech[i],
      name: nome,
    };
  lista.push(objeto);
  }
  return lista;
}
console.log(techList(['React', 'Jest', 'HTML', 'CSS', 'JavaScript'], 'Lucas'));



module.exports = {
  calcArea,
  catAndMouse,
  compareTrue,
  concatName,
  decode,
  encode,
  fizzBuzz,
  footballPoints,
  highestCount,
  splitSentence,
  techList,
};
