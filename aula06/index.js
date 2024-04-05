const campoTexto = document.getElementById("texto");
const resultado = document.getElementById("resultado");
const intervalo = setInterval(textoMaluco, 60);

campoTexto.addEventListener("keyup", textoMaluco);

function letraMaluca(letra) {
  const rotate = parseFloat(Math.random() * 16).toFixed(1);
  const scale = Math.floor(Math.random() * 6);
  const negativo = Math.random() < 0.5 ? "-" : "";
  const elemento = document.createElement("span");
  elemento.innerText = letra;
  elemento.style.transform = `rotate(${negativo}${rotate}deg) scale(1.${scale})`;
  return elemento;
}

function textoMaluco() {
  const texto = campoTexto.value;
  resultado.innerHTML = "";
  // eu também poderia usar for (i = 0; i < texto.length; i++) e usar texto[i] para pegar cada letra
  for (letra of texto) {
    switch (letra) {
      case " ":
        resultado.innerHTML += "&nbsp";
        break;
      case "\n":
        resultado.innerHTML += "<br />";
        break;
      default:
        resultado.append(letraMaluca(letra));
        break;
    }
  }
}

tamanho.addEventListener("input", (evento) => {
  resultado.style.fontSize = evento.target.value + "px";
  document.querySelector(
    "label[for=tamanho]"
  ).innerHTML = `Tamanho: ${evento.target.value}px`;
});
