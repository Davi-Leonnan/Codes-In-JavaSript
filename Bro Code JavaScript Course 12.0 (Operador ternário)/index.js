// Operador tenário: Um atalho para declarações "if" e "else".

/*
let saldoConta = 500;

// Versão simplifacada do operador tenário;.


let menssagem = saldoConta >= 1000 ? `Saldo suficiente` : `Saldo insuficiente`;

console.log(menssagem);
*/

/*
let bolos = 15;

let contagem = bolos >= 15 ? `Pronto para a venda!` : `Insuficiente para a venda`;

console.log(contagem);
*/
 
/*
let livrosAlugados = 23;

let checagem = livrosAlugados >= 23 ? `Sucesso! Todos os livros foram devolvidos!` : `Livro(s) ausentes(s), verifique a planilha de devolução`;

console.log(checagem);
*/

// Verificador de saldo com operador tenário e DOM:

const meuSaldo = document.querySelector('#meuSaldo');
const meuBotao = document.querySelector('#meuBotao');
const resultado = document.querySelector('#resultado');

meuBotao.addEventListener('click', () => {
  const valor = Number(meuSaldo.value);
  const mensagem = valor >= 1000 ? 'Valor suficiente' : 'Valor insuficiente';
  resultado.textContent = mensagem;
});


