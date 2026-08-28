// Métodos de Strings: Permite você trabalhar e manipular com items de texto (Strings)

let userName = "Leon S. Kennedy";


console.log(userName.indexOf("e")); // Retorna a posição do caractere "e" na string, que é 1

console.log(userName.length); // Retorna o tamanho da string, que é 13

console.log(userName.trim()); // Remove espaços em branco no início e no final da string

console.log(userName.toLowerCase()); // Converte todos os caracteres da string para minúsculas)

console.log(userName.repeat(3)); // Repete a string 3 vezes


let userName02 = "Ada Wong";

let result = userName02.startsWith(" ");

if (result) {
    console.log("Seu nome não deve começar com um espaço vazio");
}
else {
    console.log(userName02 + " é um nome válido");
}


let userName03 = "Sherry Birkin";

let result02 = userName03.endsWith(" ");

if (result02) {
    console.log("Seu nome não deve terminar com um espaço vazio");
}
else {
    console.log(userName03 + " é um nome válido");
}


let userName04 = "ClaireRedfield";

let result03 = userName04.includes(" ");

if (result03) {
    console.log("Seu nome não deve conter espaços em branco");
}
else {
    console.log(userName04 + " é um nome válido");
}


let phoneNumber = "555-4002-8922";

phoneNumber = phoneNumber.replaceAll("-", ""); // Substitui o primeiro "-" por uma string vazia

console.log(phoneNumber); // Retorna "55540028922"


let phoneNumber02 = "555-488-0980";

phoneNumber02 = phoneNumber02.padStart(15, "0"); // Preenche o início da string com zeros até atingir o comprimento de 10 caracteres

console.log(phoneNumber02); // Retorna "0005554880980"


let phoneNumber03 = "555-488-0980";

phoneNumber03 = phoneNumber03.padEnd(15, "0"); // Preenche o final da string com zeros até atingir o comprimento de 15 caracteres

console.log(phoneNumber03); // Retorna "555488098000000"