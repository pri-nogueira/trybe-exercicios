// Parte I
// Exercicio 1

function testingScope(escopo) {
  if (escopo === true) {
    var ifScope = 'Não devo ser utilizada fora do meu escopo (if)';
    ifScope = ifScope + ' ótimo, fui utilizada no escopo !';
    console.log(ifScope);
  } else {
    var elseScope = 'Não devo ser utilizada fora meu escopo (else)';
    console.log(elseScope);
  }
  console.log(ifScope + ' o que estou fazendo aqui ? :O'); // Se necessário esta linha pode ser removida.
}

testingScope(true);

// Modificações
const testingScope = escopo => {
  if (escopo === true) {
    let ifScopo = 'Não devo ser utilizada fora do meu escopo (if)';
    ifScopo = `${ifScopo}  ótimo, fui utilizada no escopo !`;
    console.log(ifScopo);
  } else {
    let elseScope = 'Não devo ser utilizada fora meu escopo (else)';
    console.log(elseScope);
  }
}
testingScope(true);

// Exercicio 2
const oddsAndEvens = [13, 3, 4, 10, 7, 2];
const sortOddsAndEvens = () => {
  oddsAndEvens[0] = 2;
  oddsAndEvens[1] = 3;
  oddsAndEvens[2] = 4;
  oddsAndEvens[3] = 7;
  oddsAndEvens[4] = 10;
  oddsAndEvens[5] = 13;
  return oddsAndEvens;
}

const sortedArray = sortOddsAndEvens();
console.log(`Os números ${sortedArray} se encontram ordenados de forma crescente !`);
// Outra forma com sort()
const oddsAndEvens = [13, 3, 4, 10, 7, 2];
const sortArrayBonus = array => {
  const sortOddsAndEvens = array.sort((a, b) => a - b);
  return sortOddsAndEvens;
}
const sortedArrayBonus = sortArrayBonus(oddsAndEvens);
console.log(`Os números ${sortedArrayBonus} se encontram ordenados de forma crescente !`);

// Parte II

// Exercico I
// Factorial
const factorial = number => {
  let result = 1;

  for (let index = 2; index <= number; index += 1) {
    result *= index;
  }

  return result;
}
console.log(factorial(5));
// Recursiva
const factorial = number => number > 1 ? number * factorial(number - 1) : 1;
console.log(factorial(5));

// Exercicio 2
const longestWord = frases => frases.split(' ').sort((wordA, wordB) => wordB.length - wordA.length)[0];

console.log(longestWord("Antonio foi no banheiro e não sabemos o que aconteceu")); // retorna 'aconteceu'

// Exercicio 3
