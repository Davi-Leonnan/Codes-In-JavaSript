const decreaseButton =  document.getElementById("decreaseButton");
const increaseButton =  document.getElementById("increaseButton");
const countLabel = document.getElementById("countLabel");

let count = 0;

increaseButton.onclick = function () {
    count ++;
    countLabel.textContent = count;
}

decreaseButton.onclick = function () {
    count --;
    countLabel.textContent = count;
}

const decreaseButton2 =  document.getElementById("decreaseButton2");
const increaseButton2 =  document.getElementById("increaseButton2");
const countLabel2 = document.getElementById("countLabel2");



increaseButton2.onclick = function () {
    count ++;
    countLabel2.textContent = count;
}

decreaseButton2.onclick = function () {
    count --;
    countLabel2.textContent = count;
}

const decreaseButton3 =  document.getElementById("decreaseButton3");
const increaseButton3 =  document.getElementById("increaseButton3");
const countLabel3 = document.getElementById("countLabel3");



increaseButton3.onclick = function () {
    countLabel3.textContent = "offline";
}

decreaseButton3.onclick = function () {
    countLabel3.textContent = "online";
}



