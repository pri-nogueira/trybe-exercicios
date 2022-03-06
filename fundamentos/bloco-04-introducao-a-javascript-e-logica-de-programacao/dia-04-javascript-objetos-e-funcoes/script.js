// Parte I - Objetos e For/In
// Exercicio 1
let info = {
  personagem: 'Margarida',
  origem: 'Pato Donald',
  nota: 'Namorada do personagem principal nos quadrinhos do Pato Donald',
};
console.log('Bem-vinda, ' + info['personagem']);

// Exercicio 2
info.recorrente = 'Sim';
console.log(info);

// Exercicio 3
for (let index in info) {
  console.log(index);
}

// Exercicio 4
for (let index in info) {
  console.log(info[index]);
}

// Exercicio 5
let info2 = {
  personagem: 'Tio Patinhas',
  origem: 'Christmas on Bear Mountain, Dell’s Four Color Comics #178',
  nota: 'O último MacPatinhas',
  recorrente: 'Sim',
};
for (let propeties in info) {
  if (
    propeties === 'recorrente' &&
    info[propeties] === 'Sim' &&
    info2[propeties] === 'Sim'
  ) {
    console.log('Ambos recorrentes');
  } else {
    console.log(info[propeties] + ' e ' + info2[propeties]);
  }
}

// Exercicio 6
let leitor = {
  nome: 'Julia',
  sobrenome: 'Pessoa',
  idade: 21,
  livrosFavoritos: [
    {
      titulo: 'O Pior Dia de Todos',
      autor: 'Daniela Kopsch',
      editora: 'Tordesilhas',
    },
  ],
};

console.log('O livro favorito de ' + leitor.nome + ' ' + leitor.sobrenome + ' se chama "' + leitor.livrosFavoritos[0].titulo + '"');

// Exercicio 7
leitor.livrosFavoritos.push({
  titulo: 'Harry Potter e o Prisioneiro de Azkaban',
  autor: 'JK Rowling',
  editora: 'Rocco',
})
console.log(leitor.livrosFavoritos);

// Exercicio 8
console.log(leitor.nome + ' tem ' + leitor.livrosFavoritos.length + ' livros ');

// Parte II - Funções
// Exercicio 1
function verificaPalindrome(string) {
  let reverter = string.split('').reverse().join('');
  if (reverter === string) {
    return true;
  } else {
    return false;
  }
}
console.log(verificaPalindrome('arara'));
console.log(verificaPalindrome('desenvolvimento'));

// Exercicio 2
function array(myArray) {
  let indiceMaior = 0;
  for (let index in myArray) {
    if (myArray[indiceMaior] < myArray[index]) {
      indiceMaior = index;
    }
  }
  return indiceMaior;
}
console.log(array([2, 3, 6, 7, 10, 1]));

// Exercicio 3
function array(myArray) {
  let indiceMenor = 0;
  for (let index in myArray) {
    if (myArray[indiceMenor] > myArray[index]) {
      indiceMenor = index;
    }
  }
  return indiceMenor;
}
console.log(array([2, 4, 6, 7, 10, 0, -3]));

// Exercicio 4
function names(array) {
  let maiorNome = array[0];
  for (let index in array) {
    if (names.length < array[index].length) {
      names = array[index];
    }
  }
  return names
}
console.log(names(['José', 'Lucas', 'Nádia', 'Fernanda', 'Cairo', 'Joana']));

// Exercicio 5
function maisRepetido(numeros) {
  let num = {};

  for (let index = 0; index < numeros.length; index += 1) {
    let valor = numeros[index];
    if (num[valor] === undefined) {
      num[valor] = 1;
    } else {
      num[valor] = num[valor] + 1;
    }
  }

  let contRepetido = 0;
  let contNumero = 0;
  for (let prop in num) {
    if (contRepetido < num[prop]) {
      contRepetido = num[prop];
      contNumero = prop;
    }
  }
  return contNumero;
}

console.log(maisRepetido([2, 3, 2, 5, 8, 2, 3]));

// Exercicio 6
function natural(N) {
  let numero = 0;
  for(let index = 1; index <= N; index += 1) {
    numero = numero + index;
  }
  return numero;
}
console.log(natural(5));