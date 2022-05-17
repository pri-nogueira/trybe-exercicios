//1- Crie um algoritmo que retorne o fatorial de 10
// let fatorial = 10;
// let resultado = fatorial;
// for (let i = 1; i < fatorial; += 1){
//     resultado *= i;
// }
//console.log(resultado);

// 2- Agora, desenvolva um algoritmo que é capaz de inverter uma palavra. Por exemplo, a palavra "banana" seria invertida para "ananab". Utilize a string abaixo como exemplo, depois troque por outras para verificar se seu algoritmo está funcionando corretamente.
let word = 'tryber';
let invertida = word.split('').reverse().join('');

//console.log(invertida) 

//3- Escreva dois algoritmos: um que retorne a maior palavra deste array e outro que retorne a menor. Considere o número de caracteres de cada palavra.
let array = ['java', 'javascript', 'python', 'html', 'css'];
let maior = 0;

for(let index = 0; index < array.length; array += 1) {
    if (array[index] > maior) {
        maior = array[index];
        maior += 1
     }
}
//console.log(maior)

//4- Um número primo é aquele divisível apenas por 1 e por ele mesmo. Sabendo disso, escreva um algoritmo que retorne o maior número primo entre 0 e 50.
let num = [0, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31, 32, 33, 34, 35, 36, 37, 38, 39, 40, 41, 42, 43, 44, 45, 46, 47, 48, 49, 50]
let numPrimo= num;

for(let numeros = 0; numeros <= num.length; numeros += 1){
    if(numeros % num === 0){
        console.log('É numero primo');
    }
} 
for(let divisor = 0; divisor <= num.length; divisor += 1){
    if(divisor % num === 0){
        console.log('É numero primo')
}
console.log(numPrimo)
