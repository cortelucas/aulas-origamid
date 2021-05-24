const perimetro = new Function('lado', 'return lado * 4');

function somar(n1, n2) {
  return n1 + n2
}

// ----- Function.prototype.call() -----
// executa função
function realizarSaudação() {
  console.log('Saudações!')
}

realizarSaudação.call();

// const marcaDeCarros = ['Ford', 'Fiat', 'VW'];
// marcaDeCarros.forEach.call((carros, marca) => {
//   console.log(marca);
// });

function Dom(seletor) {
  this.element = document.querySelector(seletor);
};

Dom.prototype.ativo = function(classe) {
  this.element.classList.add(classe);
}
const li = document.querySelectorAll('li');

// const ul = new Dom('ul');


// ul.ativo('ativar');

// console.log(ul)

const frutas = ['Uva', 'Maçã', 'Banana'];
Array.prototype.pop.call(frutas); //retira o ultimo item
//frutas.pop(); é exatamente igual

const arrayLike = {
  0: 'item 1',
  1: 'item 2',
  2: 'item 3',
  length: 3,
}

const filtro = Array.prototype.filter.call(li, (item) => {
  return item.classList.contains('ativo');
})

// ----- Function.prototype.aplly() -----
const numeros = [33, 232, 33, 434, 54, 5424, 4];
console.log(Math.max.apply(null, numeros));
console.log(Math.max.call(null, 33, 232, 33, 434, 54, 5424, 4));

// ----- Function.prototype.bind() -----
//bind deve-se ativar a função
const filtro2 = Array.prototype.filter.bind(li, (item) => {
  return item.classList.contains('ativo');
})
console.log(filtro2());

const $ = document.querySelectorAll.bind(document);

const carro = {
  marca: 'Ford',
  ano: 2018,
  acelerar: function(aceleracao, tempo) {
    return `${this.marca} acelerou ${aceleracao} em ${tempo}`;
  }
}
carro.acelerar(100, 20);

function imc(altura, peso) {
  return peso / (altura * altura);
}

const imc180 = imc.bind(null, 1.80);

imc(1.80, 70); // 21.6
imc180(70); // 21.6
