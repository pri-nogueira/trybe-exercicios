// Exercicío 1
function adicao(a, b) {
  let soma = a + b;
  return soma;
}
console.log(adicao(2, 5));

function subtracao(a, b) {
  let subtrair = a - b;
  return subtrair;
}
console.log(subtracao(2, 5));

function multiplicacao(a, b) {
  let multiplicar = a * b;
  return multiplicar;
}
console.log(multiplicacao(2, 5));

function divisao(a, b) {
  let dividir = a / b;
  return dividir;
}
console.log(divisao(2, 5));

function modulo(a, b) {
  let modulos = a % b;
  return modulos;
}
console.log(modulo(5, 2));

// Exercicio 2
function maiorNumero(a, b) {
  if (a > b) {
    return a;
  } else {
    return b;
  }
}
console.log(maiorNumero(5, 6));

// Exercicio 3
function maiorNumero(a, b, c) {
  if (a > b && a > c) {
    return a;
  } else if(b > a && b > c){
    return b;
  } else {
    return c
  }
}
console.log(maiorNumero(5, 6, 7));

// Exercicio 4
function definir(numero) {
  if(numero > 0){
    return "Positive";
  } else if (numero < 0) {
    return "Negative";
  } else {
    return "Zero";
  }
}
console.log(definir(5));

// Exercicio 5
function triangulo(a, b, c) {
  if (a + b + c === 180) {
    return true;
  } else {
    return false;
  }
}
console.log(triangulo(30, 50, 100));

// Exercicio 6
function xadrez(chessPiece) {

switch (chessPiece.toLowerCase()) {
  case 'rei':
    console.log('Rei-> Uma casa apenas para qualquer direção.');
    break;
  case 'bispo':
    console.log('Bispo-> Diagonal.');
    break;
  case 'rainha':
    console.log('Rainha-> Diagonal, horizontal e vertical.');
    break;
  case 'cavalo':
    console.log('Cavalo -> "L" pode pular sobre as peças.');
    break;
  case 'torre':
    console.log('Torre -> Horizontal e vertical.');
    break;
  case 'peão':
    console.log("Peão -> Apenas uma casa para frente, no primeiro movimento podem ser duas casas.");
    break;
  default:
    console.log('Erro, peça inválida!');
    break;
}
};
console.log(xadrez('peão'));

// Exercicio 7
const grade = 76;

if (grade < 0 || grade > 100) {
  console.log("Erro, nota incorreta!");
} else if (grade >= 90) {
  console.log("A");
} else if (grade >= 80) {
  console.log("B");
} else if (grade >= 70) {
  console.log("C");
} else if (grade >= 60) {
  console.log("D");
} else if (grade >= 50) {
  console.log("E");
} else {
  console.log("F");
}

// Exercicio 8
let isEven = false;
function par(a, b, c) {
  if((a % 2 === 0 || b % 2 === 0 || c % 2 === 0)) {
    return isEven = true;
  }
  return isEven
};
console.log(par(1, 5, 7));

// Exercicio 9
let isEven = false;
function impar(a, b, c) {
  if((a % 2 !== 0 || b % 2 !== 0 || c % 2 !== 0)) {
    return isOdd = true;
  }
  return isOdd
};
console.log(impar(1, 4, 8));

// Exercicio 10
function produto(custoProd, valueProd) {
  if(custoProd >= 0 && valueProd >= 0){
    const totalCustoProd = custoProd * 1.2;
    const totalProd = (valueProd - totalCustoProd) * 1000;
    return totalProd;
  } else {
    return 'Error, os valores não podem ser negativos';
  }
};
console.log(produto(1, 3));

// Exercicio 11
let aliquotINSS;
let aliquotIR;

const grossSalary = 2000.00;

if (grossSalary <= 1556.94) {
  aliquotINSS = grossSalary * 0.08;
} else if (grossSalary <= 2594.92) {
  aliquotINSS = grossSalary * 0.09;
} else if (grossSalary <= 5189.82) {
  aliquotINSS = grossSalary * 0.11;
} else {
  aliquotINSS = 570.88;
}

const baseSalary = grossSalary - aliquotINSS;

if (baseSalary <= 1903.98) {
  aliquotIR = 0;
} else if (baseSalary <= 2826.65) {
  aliquotIR = (baseSalary * 0.075) - 142.80;
} else if (baseSalary <= 3751.05) {
  aliquotIR = (baseSalary * 0.15) - 354.80;
} else if (baseSalary <= 4664.68) {
  aliquotIR = (baseSalary * 0.225) - 636.13;
} else {
  aliquotIR = (baseSalary * 0.275) - 869.36;
};

console.log("Salário: " + (baseSalary - aliquotIR));