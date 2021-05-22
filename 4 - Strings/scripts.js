// ----- Aula 01 -----
// const comida = 'Pizza';
// const agua = new String('Água');

// console.log(agua.length);

// const frase = 'A melhor comida';
// console.log(frase [4]);

// ----- Aula 02 -----
const frase = 'A melhor linguagem é ';
const linguagem = 'JavaScript';

console.log(frase.concat(linguagem, '!!'));

const fruta = 'Banana';
const listaFrutas = 'Melancia, Banana, Laranja';

console.log(listaFrutas.includes(fruta));
console.log(fruta.endsWith('na'));
console.log(fruta.slice(0,3));
console.log(fruta.slice(-3));
console.log(fruta.indexOf('B'));

const listaPrecos = ['R$ 99', 'R$ 199', 'R$ 12000'];

listaPrecos.forEach((preco) => {
  console.log(preco.padStart(10, '.'));
});

// ----- Aula 03 -----
let listaItens = 'Camisas Bonés Calças Bermudas Vestidos Saias';
listaItens = listaItens.replace(/[ ]+/g, ', '); //Regex

const arrayLista = listaItens.split(', ');