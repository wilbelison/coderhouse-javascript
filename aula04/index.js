const somar = (valorUm, valorDois) => valorUm + valorDois;
const subtrair = (valorUm, valorDois) => valorUm - valorDois;
const multiplicar = (valorUm, valorDois) => valorUm * valorDois;
const dividir = (valorUm, valorDois) => valorUm / valorDois;

let um = document.getElementById("um");
let dois = document.getElementById("dois");
let operacao = document.getElementById("operacao");
let resultado = document.getElementById("resultado");

const processar = function () {
  const valorUm = parseFloat(um.value ? um.value : 0);
  const valorDois = parseFloat(dois.value ? dois.value : 0);

  switch (operacao.value) {
    case "somar":
      resultado.innerHTML = somar(valorUm, valorDois);
      break;
    case "subtrair":
      resultado.innerHTML = subtrair(valorUm, valorDois);
      break;
    case "multiplicar":
      resultado.innerHTML = multiplicar(valorUm, valorDois);
      break;
    case "dividir":
      resultado.innerHTML = dividir(valorUm, valorDois);
      break;
    default:
      break;
  }
};

um.focus();

um.addEventListener("keyup", processar);
dois.addEventListener("keyup", processar);
operacao.addEventListener("change", processar);
