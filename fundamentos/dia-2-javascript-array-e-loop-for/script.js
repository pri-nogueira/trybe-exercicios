//2-Para o segundo exercício, some todos os valores contidos no array e imprima o resultado;
let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];
let total = numbers.reduce((total, currentElement) => total + currentElement)

//console.log(total)

//3-Para o terceiro exercício, calcule e imprima a média aritmética dos valores contidos no array;

let mediaAritmetica = total / numbers.length

//4-Com o mesmo código do exercício anterior, caso o valor final seja maior que 20, imprima a mensagem: "valor maior que 20". Caso não seja, imprima a mensagem: "valor menor ou igual a 20";

if(mediaAritmetica > 20){
    //console.log("Valor maior que 20");
} else {
    //console.log("Valor menor ou igual a 20")
}

//5-Utilizando for , descubra qual o maior valor contido no array e imprima-o;
let maior = []
for (let index = 0; index < numbers.length; index +=1) {
    if (numbers[index] > maior){ 
        maior = numbers[index]; 
    }
}
//console.log(maior)

//
let par =[]
let impar = []
for (let index = 0; index < numbers.length; index +=1) {
    if (numbers[index] % 2 === 0){ 
        par = numbers[index] += 1; 
    }
}
console.log(par)