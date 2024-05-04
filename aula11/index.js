// --- Math, Números aleatórios e Raizes ---

// function numeroAleatorios(minimo = 0, maximo = 1) {
//     return Math.round((Math.random() * (maximo - minimo)) + minimo);
// }

// function arrayDeNumerosAleatorios(quantidade, minimo, maximo){
//     let minhaArray = [];
//     for(i =0; i < quantidade; i++){
//         minhaArray.push(numeroAleatorio(minimo,maximo));
//     }
//     return minhaArray;
// }

// function arrayDaRaizQuadrada(arr){
//     return arr.map((numero) => Math.sqrt(numero));
// }

// const quantidade = parseInt(prompt("Digite a quantidade de números aleatórios:"));
// const minimo = parseInt(prompt("Digite o menor número possível:"));
// const maximo = parseInt(prompt("Digite o maior número possível:"));

// const minhaArrayAleatoria = arrayDeNumerosAleatorios(quantidade, minimo, maximo);
// const minhaArrayAleatoriaQuadrada = arrayDaRaizQuadrada(minhaArrayAleatoria);

// console.log("O array de números aleatórios é:", minhaArrayAleatoria)
// console.log("O array da raiz quadrada dos números aleatórios é:", minhaArrayAleatoriaQuadrada);

// --- Date e verificação de Signos

// console.log(new Date(2023, 1, 25));
// const quaseNatal = new Date(2024, 11, 24, 23, 59, 59); // 11 = Dezembro, 0 = Janeiro
// console.log(quaseNatal);

const signos = {
  Áries: ["21/03", "20/04"],
  Touro: ["21/04", "20/05"],
  Gêmeos: ["21/05", "20/06"],
  Câncer: ["21/06", "21/07"],
  Leão: ["22/07", "22/08"],
  Virgem: ["23/08", "22/09"],
  Libra: ["23/09", "22/10"],
  Escorpião: ["23/10", "21/11"],
  Sagitário: ["22/11", "21/12"],
  Capricórnio: ["22/12", "20/01"],
  Aquário: ["21/01", "19/02"],
  Peixes: ["20/02", "20/03"]
};

function buscaSigno(data) {
  const [ano, mes, dia] = data.split("-");

  for (signo in signos) {
    const [inicio, fim] = signos[signo];
    const [inicioDia, inicioMes] = inicio.split("/");
    const [fimDia, fimMes] = fim.split("/");

    if (
      (mes == inicioMes && dia >= inicioDia) ||
      (mes == fimMes && dia <= fimDia)
    ) {
      return signo;
    }
  }
}

const meuAniversario = document.getElementById("aniversario");
const meuSigno = document.getElementById("signo");

meuAniversario.addEventListener("change", (e) => {
    meuSigno.textContent = buscaSigno(e.target.value);
});