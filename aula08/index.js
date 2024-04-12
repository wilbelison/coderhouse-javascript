/*

let fruta = {
    nome: "Uva",
    cor: "Verde",
    peso: 100
}

console.log(fruta);

fruta.nome = "Maçã";
fruta["peso"] = 200;

for(info in fruta){
    console.log(fruta[info]);
}

*/

/*

function Fruta(nome, cor, peso = 100){
    this.nome = nome;
    this.cor = cor;
    this.peso = peso;
}

const fruta1 = new Fruta("Uva");
const fruta2 = new Fruta("Maçã", "Vermelha", 200);
const fruta3 = new Fruta("Pêra", undefined, 300);

console.log(fruta1);
console.log(fruta2);
console.log(fruta3);

*/

/*

function Pessoa(nome, idade, rua){
    this.nome = nome;
    this.idade = idade;
    this.rua = rua;
    this.falar = function(){
        console.log(`Olá ${this.nome}!`);
    }
}

pessoa1 = new Pessoa("Wil", 38, "Rua dos Cornos, 666");
pessoa2 = new Pessoa("Beli", 24, "Av. Paulista");

console.log(pessoa1);
console.log(pessoa2);

pessoa1.falar();
pessoa2.falar();

console.log(pessoa1.nome.toUpperCase());
console.log(pessoa1.nome.toLowerCase());

*/

function Fruta(nome, cor){
    this.nome = nome;
    this.cor = cor;
    this.gritar = function(param){
        console.log(this[param].toUpperCase() + "!!!");
    }
}

const fruta1 = new Fruta("Uva", "Verde");
const fruta2 = new Fruta("Maçã", "Vermelha");

console.log(fruta1.nome.length);
fruta1.gritar("nome");
fruta1.gritar("cor");
console.log(fruta2.nome.length);
fruta2.gritar("nome");
fruta2.gritar("cor");