// Desafio 11
function generatePhoneNumber(numeros) {
  // seu código aqui
  let resultado;
  let repetidos = ' ';
  if (numeros.length != 11) {
    return resultado = 'Array com tamanho incorreto.';
  }
  for (let index of numeros) {
    repetidos = 0;
    for (let i of numeros) {
      if (i === index) {
        repetidos += 1;
      }
    }
    if (index < 0 || index > 9 || repetidos >= 3) {
      return resultado = 'não é possível gerar um número de telefone com esses valores';
    }
  }
  if (numeros.length == 11) {
    let ddd = '(' + numeros[0] + numeros[1] + ')';
    let numerosInicio = numeros[2];
    let numerosInicio2 = numeros[3];
    let numeroInicio3 = numeros[4];
    let numeroInicio4 = numeros[5];
    let numeroInicio5 = numeros[6] + '-';
    let numeroFinal = numeros[7];
    let numeroFinal2 = numeros[8];
    let numeroFinal3 = numeros[9];
    let numeroFinal4 = numeros[10];
    return resultado = ddd + ' ' + numerosInicio + numerosInicio2 + numeroInicio3 + numeroInicio4 + numeroInicio5 + numeroFinal + numeroFinal2 + numeroFinal3 + numeroFinal4;
  }
}
console.log(generatePhoneNumber([1, 2, 3, 4, 5, 6, 7, 8, 9, 0, 1]));
console.log(generatePhoneNumber([5, 2, 8, 1, 5, 3, 7, 2, 8, 9, 0]));
console.log(generatePhoneNumber([9, 2, 3, 0, 5, -6, 7, 8, -7, 0, 1, 10]));
console.log(generatePhoneNumber([9, 2, 3, 0, 5, -6, 7, 8, -7, 0, 1]));
console.log(generatePhoneNumber([0, 2, 3, 4, 5, 7, 7, 8, 9, 0, 7]));

// Desafio 12
function triangleCheck(lineA, lineB, lineC) {
  // seu código aqui
  let soma1 = lineB + lineC;
  let soma2 = lineA + lineC;
  let soma3 = lineA + lineB;
  let dif1 = Math.abs(lineB - lineC);
  let dif2 = Math.abs(lineA - lineC);
  let dif3 = Math.abs(lineA - lineB);

  if (soma1 > lineA && dif1 < lineA) {
    if (soma2 > lineB && dif2 < lineB) {
      if (soma3 > lineC && dif3 < lineC) {
        return true;
      }
    }
  }
  return false;
}
console.log(triangleCheck(16, 9, 2));
console.log(triangleCheck(10, 13, 2));
console.log(triangleCheck(10, 14, 8));
console.log(triangleCheck(2, 3, 4));

// Desafio 13
function hydrate(bebidas) {
  // seu código aqui
  let numeros = apenasNumberos(bebidas);
  let soma = numeros[0];
  for (let i = 1; i < numeros.length; i += 1) {
    //atribuição de adição
    soma += numeros[i];
  }
  if (soma === 1) {
    return soma + ' copo de água';
  }
  return soma +' copos de água';
}
// O metodo match compara uma string com uma expressão regular (let reg)
// /\d encontra correspondencia com um numero, equivalente a [0-9]
// marcador global(g), sem o marcador global, o objeto reg apenas se há uma correspondência em uma string e retorna somente à primeira
function apenasNumberos(string) {
  let reg = /\d/g;
  let numStr = string.match(reg);
  let numInteiro = [];
  //laço para encontrar numeros dentro do parametro string
  for (let i = 0; i < numStr.length; i += 1) {
    numInteiro[i] = (parseInt(numStr[i], 10));
  }
  return numInteiro;
}
console.log(hydrate('1 cerveja'));
console.log(hydrate('1 cachaça, 5 cervejas e 1 copo de vinho'));
console.log(hydrate('2 shots de tequila, 2 cervejas e 1 corote'));
console.log(hydrate('1 copo de catuaba, 1 cervejas e 1 copo de vinho'));
console.log(hydrate('4 caipirinhas e 2 cervejas'));

//console.log(justNumbers('1 copo, 2 copos'))
module.exports = {
  generatePhoneNumber,
  hydrate,
  triangleCheck,
};
