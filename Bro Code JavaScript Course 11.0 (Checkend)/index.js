// checkend: Proprieda que determina o estado de checagem de uma caixa de checagem no HTML ou um botão "submit."

const myCheckBox = document.getElementById("myCheckBox");
const visaButton = document.getElementById("visaButton");
const masterCardButton = document.getElementById("masterCardButton");
const payPalButton = document.getElementById("payPalButton");
const mySubmit = document.getElementById("mySubmit");
const subResult = document.getElementById("subResult");
const paymentResult = document.getElementById("paymentResult");


// Funçao para o botão de inscrição e forma de pagamento:

mySubmit.onclick = function() {
  
    if (myCheckBox.checked) {
        subResult.textContent = `Você está inscrito.`;
    }

    else {
        subResult.textContent = `Você não está inscrito.`;
    }

    if(visaButton.checked) {
        paymentResult.textContent = `Você está pagando com visa.`;
    }

    else if(masterCardButton.checked) {
        paymentResult.textContent = `Você está pagando com MasterCard.`;
    }

    else if(payPalButton.checked) {
        paymentResult.textContent = `Você está pagando com PayPal.`;
    }

    else {
        paymentResult.textContent = `Voceê deve selecionar uma forma de pagamento.`
    }
}








