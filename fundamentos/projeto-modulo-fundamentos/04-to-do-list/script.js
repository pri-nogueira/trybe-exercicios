//Recuperando os elementos do HTMl
let inputNovaTarefa = document.querySelector('#texto-tarefa');
let listaTarefa = document.querySelector('#lista-tarefas');
let btnAddTarefa = document.querySelector('#criar-tarefa');
let btnExcluiTarefa = document.querySelector('#apaga-tudo');
let btnSalvar = document.querySelector('#salvar-tarefas');
let btnRemover = document.querySelector('#remover-finalizados');
let btnUp = document.querySelector('#mover-cima');
let btnDown = document.querySelector('#mover-baixo');
let btnRemSelecionado = document.querySelector('#remover-selecionado');


//requisito 5
btnAddTarefa.addEventListener('click', function () {
    let tarefa = document.createElement('li');
    if (inputNovaTarefa.value === '') {
        return null;
    }
    tarefa.innerHTML = inputNovaTarefa.value;
    listaTarefa.appendChild(tarefa);
    inputNovaTarefa.value = '';
});
//Primeiro codigo utilizado para criar as tarefas, porem quis dar uma enxugada, pois não estava permitindo o requisito 11 funcionar
// btnAddTarefa.addEventListener('click', (e) => {
//     let tarefa = {
//         nome: inputNovaTarefa.value,
//     }
//     adicionarTarefa(tarefa)
// });
// function adicionarTarefa(tarefa) {
//     let li = criarTagLi(tarefa);
//     listaTarefa.appendChild(li);
//     inputNovaTarefa.value = '';
// }
// function criarTagLi(tarefa) {
//     let li = document.createElement('li');

//     let span = document.createElement('span');
//     span.classList.add("textoTarefa");
//     span.innerHTML = tarefa.nome;


//     li.appendChild(span);
//     return li;
// }

//requisito 7 e 8 *O objeto Set permite que você armazene valores únicos de qualquer tipo
function color(clicar) {
    let itensLista = document.querySelectorAll('li');
    for (let index = 0; index < itensLista.length; index += 1) {
        itensLista[index].classList.remove('set')
    }
    clicar.target.classList.add('set');
}
listaTarefa.addEventListener('click', color);

//requesito 9 
function finalizados(event) {
    let completedItem = event.target;
    if (completedItem.classList.contains('completed')) {//Contains determina se um conjunto de caracteres pode ser encontrado dentro de outra string
        event.target.classList.remove('completed');
    } else {
        event.target.classList.add('completed');
    }
}
listaTarefa.addEventListener('dblclick', finalizados);

//requisito 10
btnExcluiTarefa.addEventListener('click', function () {
    let confirmacao = window.confirm('Tem certeza que deseja excluir??');
    if (confirmacao) {
        listaTarefa.innerHTML = '';
        localStorage.removeItem('lista');
    }
})
//requisito 11
btnRemover.addEventListener('click', function () {
    let concluidos = document.querySelectorAll('.completed');//resgata os itens com a class completed
    for (let i = 0; i < concluidos.length; i += 1) {
        if (concluidos[i].classList.contains('completed')) {
            concluidos[i].remove();
        }
    }
})

//requisito 12
btnSalvar.addEventListener('click', function () {
    localStorage.setItem('lista', listaTarefa.innerHTML);
    alert('Salvo com sucesso!')
});
window.onload = () => {
    let loadTasks = localStorage.getItem('lista');
    listaTarefa.innerHTML = loadTasks;
}
//requisito 13
btnUp.addEventListener('click', function () {
    const elem = document.getElementsByClassName('set')[0];
  if (elem === undefined) {
    return;
  }
  //propriedade somente leitura retorna o elemento
  if (elem.previousElementSibling === null) {
    return;
  }
  
  const elemTxt = elem.innerHTML;
  const prevElem = elem.previousElementSibling;
  const prevTxt = prevElem.innerHTML;

  prevElem.innerHTML = elemTxt;
  prevElem.className += elem.classList;
  elem.innerHTML = prevTxt;
  elem.classList.toggle('set');
});

//requisito 14
btnRemSelecionado.addEventListener('click', function () {
    let selecionado = document.querySelectorAll('.set');//resgata os itens com a class set
    for (let i = 0; i < selecionado.length; i += 1) {
        if (selecionado[i].classList.contains('set')) {
            selecionado[i].remove();
        }
    }
});