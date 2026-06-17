// Uso da função "input" no JavaScript:

/*
// Maneira Fácil:

let username;

username = window.prompt("Qual o seu nome de usuário?: ");

console.log(username);
*/

// Maneira Profissional:

let username; 

document.getElementById(`minhaResposta`).onclick = function() {
  username = document.getElementById(`meuTexto`).value;
  document.getElementById(`meuH1`).textContent = `Olá ${username}`;
}