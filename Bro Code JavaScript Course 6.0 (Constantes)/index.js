// Construção de constantes em JavScript:

const pi = 3.13159;
let radius;
let cimcumference;


document.getElementById("mySubmit").onclick = function() {
    radius = document.getElementById("myText").value;
    radius = Number(radius);
    cimcumference = 2 * pi * radius;
    document.getElementById("myh3").textContent = cimcumference + `cm`;
}

