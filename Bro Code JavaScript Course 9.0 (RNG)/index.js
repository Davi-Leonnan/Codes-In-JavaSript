// RANDOM NUMBER GENERATOR (RNG);


// Parte 01:
/*
// Números aleatórios de 1 a 0:

let randomNum = Math.random();

console.log(randomNum);

// Números aleatórios até um valor específico:

let randomNum2 = Math.random() * 10;

console.log(randomNum2);

// Números aleatórios até um valor específico (inteiros):

let randomNum3 = Math.floor(Math.random() * 10);

console.log(randomNum3);

// Operações com RNG:

const min = 50;
const max = 100;

let randomNum4 = Math.floor(Math.random() * max) + min;

console.log(randomNum4);

let randomNum5 = Math.floor(Math.random() * (max - min)) + min;

console.log(randomNum5);
*/

// Parte 02:

const myButton = document.getElementById("myButton");
const myLabel = document.getElementById("myLabel");
const min2 = 1;
const max2 = 6;
let randomNum;


myButton.onclick = function() {
    randomNum = Math.floor(Math.random() * max2) + min2;
    myLabel.textContent = randomNum;
}









