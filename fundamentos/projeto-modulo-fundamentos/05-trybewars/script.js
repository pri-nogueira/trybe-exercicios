// 3-Acrescente função ao formulário
const botao = document.querySelector('button');

botao.addEventListener('click', () => {
  const email = document.getElementById('email');
  const senha = document.getElementById('senha');
  if (email.value === 'tryber@teste.com' && senha.value === '123456') {
    alert('Olá, Tryber!');
  } else {
    alert('Email ou senha inválidos.');
  }
});

// Requisito 18: só habilita quando o campo está marcado como checked
// Referência para usar habilitar e desabilitar botões: https://www.delftstack.com/pt/howto/javascript/javascript-disable-button/
// const campoCheck = document.getElementById('agreement');
// campoCheck.onchange = function buttonOnOff() {
//   const botaoEnviar = document.getElementById('submit-btn');
//   if (checkbox.checked === true) {
// botaoEnviar.disabled = false;
//   } else {
// botaoEnviar.disabled = true;
//   }
// };
const botaoEnviar = document.getElementById('submit-btn');
const campoCheck = document.getElementById('agreement');
campoCheck.addEventListener('click', () => {
  if (campoCheck.checked === true) {
    botaoEnviar.removeAttribute('disabled');
  } else {
    botaoEnviar.setAttribute('disabled', 'disabled');
  }
});

// 20-atualizado a medida que algo for digitado na textarea
function increment(count) {
  const txtLength = count.target.maxLength - count.target.textLength; // maxLenght está no html, target busca o elemento que acionou o evento
  document.getElementById('counter').innerHTML = txtLength;
}
const count = document.getElementById('textarea');
count.addEventListener('keyup', increment); // Executada quando o usuario um usuário liberar uma chave
count.addEventListener('keydown', increment); // Executada quando o usuario estiver pressionando uma tecla

// 21-Função que recupera o que foi selecionado no campo 'Qual conteúdo você está com mais vontade de aprender?' e transforma em uma string
function materiasEscolhidas() {
  const materias = document.querySelectorAll('input[class=subject]:checked');
  const materiasSelecionadas = [];
  for (let i = 0; i < materias.length; i += 1) {
    materiasSelecionadas.push(materias[i].value);
  }
  const result = materiasSelecionadas.join(', ');
  return result;
}

// Função que é executada apenas depois de clicar no botão enviar, que faz com que o conteúdo da tag <form> seja substituído pelas informações inseridas pelo usuário
// Referência para utilização de Template Literals: https://mazer.dev/como-corrigir-erro-eslint-unexpected-string-concatenation/
function changesFormContent() {
  const formulario = document.getElementById('evaluation-form');
  const nome = document.getElementById('input-name');
  const sobrenome = document.getElementById('input-lastname');
  const email = document.getElementById('input-email');
  const casa = document.getElementById('house');
  const familia = document.querySelector('input[name="family"]:checked');
  const materia = materiasEscolhidas();
  const avaliacao = document.querySelector('input[name="rate"]:checked');
  const observacoes = document.getElementById('textarea');
  formulario.innerHTML = `<h3>Formulário de Avaliação</h3><br>
    <p>Nome: ${nome.value} ${sobrenome.value}</p><br>
    <p>Email: ${email.value}</p><br>
    <p>Casa: ${casa.value}</p><br>
    <p>Família: ${familia.value}</p><br>
    <p>Matérias: ${materia}</p><br>
    <p>Avaliação: ${avaliacao.value}</p><br>
    <p>Observações: ${observacoes.value}</p>`;
}

// função que adiciona evento de clique no botao enviar
function botaoEnviarListener() {
  const sendButton = document.getElementById('submit-btn');
  sendButton.addEventListener('click', changesFormContent);
}
botaoEnviarListener();
