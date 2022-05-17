// Parte I
// Exemplo 1
function userInfo() {
  co// Toda expressão dentro do escopo da função userInfo tem acesso à variável userEmail
    
  }
  userInfo();
  console.log(userEmail);

// Exemplo 2
if (true) {
  // inicio do escopo do if
  const userAge = '20';
  console.log(userAge); // 20
  // fim do escopo do if
}
console.log(userAge); // 20

// Parte II
// Exemplo 1

const myName = 'Isabella';
console.log('Hello' + ' ' + myName + '!');

const myName = 'Isabella';
console.log(`Welcome ${myName}!`);

// Parte III
// Exemplo 1

const printName = () => {
  const myName = 'Lucas';
  return myName;
};
console.log(printName());

const printName = () => 'Lucas';
console.log(printName());

// Parte IV
// Exemplo 1

// A sintaxe básica do operador ternário é muito simples:
`expressão verdadeira ou falsa` ? `retorno se verdadeira` : `retorno se falsa`;

// Assim, por exemplo, podemos ter expressões com a seguinte estrutura:
const trueExpression = (1 + 1 === 2) ? `isso é verdade` : `isso é mentira`;
console.log(trueExpression); // isso é verdade

const falseExpression = (2 + 2 === 3) ? `isso é verdade` : `isso é mentira`;
console.log(falseExpression); // isso é mentira