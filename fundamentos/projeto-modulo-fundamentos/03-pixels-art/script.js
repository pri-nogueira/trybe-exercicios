//Adiciona color na variavel paletaDeCores
let colorPalette = document.querySelectorAll('.color');
let painting = document.querySelector('#pixel-board');
let botaoLimpar = document.querySelector('#clear-board');



/////////////////////////////////////////////////////////
//adiciona a class selected na primeira cor (preto)
colorPalette[0].style.backgroundColor = 'black';
colorPalette[0].classList.add('selected')

//////////////////////////////////////////////////////////
function createPixel(quantDePixel = 5) {
    painting.style.width = `${quantDePixel * 42}px`
    //cria os pixel
    for (let index = 0; index < quantDePixel * quantDePixel; index += 1) {
        //Cria uma div com a class pixel 
        let pixel = document.createElement('div');
        pixel.className = 'pixel';
        //Adiciona elementos ao HTML
        painting.appendChild(pixel);
    }
}
window.onload = createPixel()

/////////////////////////////////////////////////////////
//Adiciona a cor preto como a primeira cor selecionada
function trocaDoSeletor(corInicial) {
    //Coloca dentro da variavel a class SELECTED
    let corSelecionada = document.querySelector('.selected')
    //Remove a classe "selected" de um elemento
    corSelecionada.classList.remove('selected')
    //Adiciona uma classe dentro do elemento
    corInicial.target.classList.add('selected');

}
//Permite que as cores sejam alteradas
for (let i = 0; i < colorPalette.length; i += 1) {
    colorPalette[i].addEventListener('click', trocaDoSeletor)
};

//Recebe o id dentro de uma variavel
let quadroDePixel = document.querySelector('#pixel-board');
//Permite que as cores sejam selecionadas e pinta os pixel
function tinta(origem) {
    let corSelecionada = document.querySelector('.selected').style.backgroundColor
    if (origem.target.classList.contains('pixel'))
        origem.target.style.backgroundColor = corSelecionada;
};
quadroDePixel.addEventListener('click', tinta);

/////////////////////////////////////////////////////////
botaoLimpar.addEventListener('click', function () {
    painting.innerHTML = ""
    createPixel(quantDePixel = 5)
})

/////////////////////////////////////////////////////////
let valorImput = document.querySelector('#board-size')
function apagarBord() {
    painting.innerHTML = ""
}

function alertaBotao() {
    alert("Board inválido!");
}

function montar() {
    if (valorImput.value >= 5) {
        apagarBord()
        quantDeQuadrados = valorImput.value
        createPixel(quantDeQuadrados)
        painting.style.width = `${quantDeQuadrados * 42}px`
    } else if (valorImput.value >= 51) {
        quantDeQuadrados = 50
        createPixel(quantDeQuadrados = 50)
        painting.style.width = `${quantidadeDeQuadrados * 42}px`
    } else {
        alertaBotao()
    }
}

let botaoDeAtualização = document.querySelector('#generate-board');

botaoDeAtualização.addEventListener('click', montar)

///////////////////////////////////////////////////////
//Gerador de cor
window.onload = function () {
    let colors = document.querySelectorAll('.color');
    for (let x = 1; x < colors.length; x += 1) {
      // * Source: https://css-tricks.com/snippets/javascript/random-hex-color/
      var geradorDeCores = Math.floor(Math.random()*16777215).toString(16);
      colors[x].style.backgroundColor = '#' + geradorDeCores;
    }
  }