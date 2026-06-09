// Exemplo 01:

const participantes = ["Mônica", "Cebolinha", "Cascão", "Magali", "Franjinha", "Denise", "Xaveco", "Quinzinho"];

const nomesComC = participantes.filter(function(elemento)
{
    return elemento[0] === "C";

});

console.log(nomesComC);

// Exemplo 02:

const vendas = [1000, 1200, 800, 750, 780, 950, 1100];

const lucro = vendas.filter(function(ganho)
{
    return ganho > 900;
})


console.log(lucro);