/*

CRIAR UM ALGORITMO JS SIMPLES

Formato: código fonte em arquivo JavaScript, formato .js, vinculado ao arquivo HTML correspondente.
Recomendações: usamos prompt() para solicitar dados ao usuário e console.log() ou alert() para mostrar
o resultado das operações realizadas com esses dados. Se for somar uma entrada, não se esqueça de
parseá-la antes da soma usando parseInt() ou parseFloat()

Desafio entregável

Instruções: Crie um script em JS que solicite ao usuário que insira no mínimo 1 (um) dado.
Em seguida, com JavaScript, realize operações matemáticas ou de concatenação sobre as entradas,
considerando o tipo de dado. Ao finalizar, mostre os resultados por meio de alert() ou console.log().

CRIAR UM ALGORITMO JS SIMPLES

Desafio entregável

Escolher um tipo de solicitação ao usuário. Por exemplo:
- Solicitar o nome pelo prompt e mostrá-lo em console junto a algum texto de saudação. Exemplo: Olá, João!
- Solicitar um número pelo prompt, parseá-lo, somá-lo a outro que esteja armazenado em uma variável e, por fim,
mostrar o resultado por console.
- Solicitar um texto pelo prompt, depois outro, concatená-los e mostrar o resultado através de alert.

*/

var nome = prompt("Qual seu nome?");

console.log(`Olá, ${nome}!`);

var valorUm = parseInt(prompt('Insira um valor:'));
var valorDois = parseInt(prompt('Insira outro valor:'));

var valorSoma = valorUm + valorDois;

alert(`Olá, ${nome}! ${valorUm} + ${valorDois} = ${valorSoma}.`);