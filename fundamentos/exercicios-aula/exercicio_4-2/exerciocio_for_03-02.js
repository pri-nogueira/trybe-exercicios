//Exercicio multiplicar
let numero = 7;

 for(let contador = 1; contador <= 9; contador ++) {
     console.log(numero * contador)
}

//Utilize o for para imprimir os elementos da lista groceryList com o console.log() :

let groceryList = ['Arroz', 'Feijão', 'Alface', 'Melancia'];


for (let index = 0; index <groceryList.length; index += 1) {
    console.log(groceryList[index]);
  }

////////////////////////
let numeros = [1,2,3,4,5];
for(let numero of numeros) {
  console.log(numero);
}

// resultado: 
//1
//2
//3
//4
//5

///////////////////////
let word = 'Hello';
for (let letter of word) {
  console.log(letter);
}
// resultado:
// "H"
// "e"
// "l"
// "l"
// "o"

///////////////////////
let arrOfNumbers = [10, 20, 30];
for (let sum of arrOfNumbers) {
  sum += 1;
  console.log(sum);
}
// 11
// 21
// 31

console.log(arrOfNumbers);
// Resultado: [10, 20, 30]

///////////////////////
