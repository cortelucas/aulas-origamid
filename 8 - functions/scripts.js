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
