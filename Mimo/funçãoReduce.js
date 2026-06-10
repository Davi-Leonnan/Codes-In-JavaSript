// Exemplo 01:

const kilometrosPecorridos = [6, 7, 9, 10, 11, 6, 9, 14];

const total = kilometrosPecorridos.reduce(function(prev, curr) {
  return prev + curr;
});

console.log(total);

// Exemplo 02:

const acaiBatido = [80, 90, 85, 92, 100, 75, 81];

const valorTotal = acaiBatido.reduce(function(prevValor, currValor) {
    return prevValor + currValor;
});

console.log("Total de açaí batido: " + valorTotal);