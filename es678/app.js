
let nome = "Daniel";
const idade = 25;

const somar = (a, b) => a + b;
console.log(somar(2, 3)); // 5
const linguagem = "JavaScript";
console.log(`Estou aprendendo ${linguagem} com ES6!`);


const pessoa = { name: "Daniel", age: 25 };
const { name, age } = pessoa;
const numeros = [1, 2, 3];
const novosNumeros = [...numeros, 4, 5];

function soma(...valores) {
  return valores.reduce((a, b) => a + b);
}

class Pessoa {
  constructor(nome) {
    this.nome = nome;
  }

  falar() {
    console.log(`Olá, meu nome é ${this.nome}`);
  }
}

// export const saudacao = () => "Olá!";
// import { saudacao } from "./arquivo.js";

const frutas = ["maçã", "banana", "uva"];
console.log(frutas.includes("banana")); // true

console.log(2 ** 3); // 8
 Object.entries(), Object.values(), Object.keys()

const usuario = { nome: "Daniel", idade: 25 };

console.log(Object.entries(usuario)); // [['nome', 'Daniel'], ['idade', 25]]
console.log(Object.values(usuario));  // ['Daniel', 25]
console.log(Object.keys(usuario));    // ['nome', 'idade']
 String.prototype.padStart() / padEnd()


const codigo = "7";
console.log(codigo.padStart(4, "0")); // "0007"
console.log(codigo.padEnd(4, "0"));   // "7000"

const esperar = () => {
  return new Promise(resolve => setTimeout(() => resolve("Pronto!"), 1000));
};

async function executar() {
  console.log("Esperando...");
  const resultado = await esperar();
  console.log(resultado); // "Pronto!"
}
executar();
