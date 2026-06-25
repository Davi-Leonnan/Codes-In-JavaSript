// Condicionais:


// Condicional "e": &&
// Condicional "ou": ||

const myText = document.getElementById("myText");
const mySubmit = document.getElementById("mySubmit");
const resultElement = document.getElementById("resultElement");
let idade;
let habilitacao = true;

mySubmit.onclick = function () {

    idade = Number(myText.value);

    if(idade >= 18 && idade <= 70) {
    resultElement.textContent = `Você possui a idade adeguada para dirigir.`;
    }

   else if (idade <= 0) {
    resultElement.textContent = `Idade nao deferida.`;
    }  

   else if(idade >=70) {
    resultElement.textContent = `Você precisa de uma licença especial para dirigir.`;
   }

   else {
    resultElement.textContent = `Você não possui idade para dirigir.`;
   }


}





