let num = [0, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31, 32, 33, 34, 35, 36, 37, 38, 39, 40, 41, 42, 43, 44, 45, 46, 47, 48, 49, 50]
let numeroPrimo = 0;
let quantDivisores = 0;

for (let numeros = 1; numeros <= num.length; numeros += 1) {
    var resto = num % numeros;
    if (resto == 0) {
        quantDivisores++;
    }
    if (quantDivisores > 2) {
        break;
    }
}

if (quantDivisores == 2) {
    numeroPrimos.push(num);
}


console.log(numeroPrimo)
