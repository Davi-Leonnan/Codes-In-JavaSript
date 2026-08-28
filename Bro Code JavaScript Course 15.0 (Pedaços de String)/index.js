// Pedaços de String: Criando uma sub-string através de uma amostra de uma outra string.


// Obs: O último index de um fatiamento é exclusivo, ou seja, ele não pertence ao último caractere da string. Por isso, o último index é sempre o index do 
// último caractere que você quer pegar + 1.

const fullName = "Canoa Furada";

let firstName = fullName.slice(0, 5);

console.log(firstName);

let lastName = fullName.slice(6, 12);

console.log(lastName);

let firstChar = fullName.slice(0, 1);

console.log(firstChar);

let lastChar = fullName.slice(11, 12);

console.log(lastChar);


const email = "canoa.furada@email.com";

let userName = email.slice(0, email.indexOf("@"));
let extension = email.slice(email.indexOf("@") + 1)

console.log(userName);
console.log(extension);