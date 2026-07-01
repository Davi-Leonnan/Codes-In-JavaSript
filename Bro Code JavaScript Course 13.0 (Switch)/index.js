const inputTemperatura = document.getElementById("meuSaldo");
const botaoConfirmar = document.getElementById("meuBotao");
const resultado = document.getElementById("resultado");

botaoConfirmar.addEventListener("click", () => {
  const temperaturaCorporal = Number(inputTemperatura.value);

  if (Number.isNaN(temperaturaCorporal)) {
    resultado.textContent = "Digite uma temperatura válida.";
    return;
  }

  let mensagem;

  switch (true) {
    case temperaturaCorporal >= 36 && temperaturaCorporal <= 37.5:
      mensagem = `${temperaturaCorporal}°C - temperatura estável.`;
      break;
    case temperaturaCorporal >= 30 && temperaturaCorporal < 36:
      mensagem = `${temperaturaCorporal}°C - temperatura baixa.`;
      break;
    case temperaturaCorporal < 30:
      mensagem = `${temperaturaCorporal}°C - temperatura super baixa! Procure atendimento urgentemente.`;
      break;
    case temperaturaCorporal > 37.5 && temperaturaCorporal <= 39:
      mensagem = `${temperaturaCorporal}°C - temperatura alta.`;
      break;
    case temperaturaCorporal > 39:
      mensagem = `${temperaturaCorporal}°C - temperatura super alta! Procure atendimento urgentemente.`;
      break;
    default:
      mensagem = "Digite uma temperatura válida.";
      break;
  }

  resultado.textContent = mensagem;
});

