// ----- Array.forEach -----
const carros = ['Ford', 'Fiat', 'Honda'];

carros.forEach((item, index, array) => {
  console.log(item, index, array);
});

const li = document.querySelectorAll('li');
li.forEach(i => i.classList.add('ativa'));

// ----- Array.map ------
const novaArray = carros.map((item, index, array) => {
  return item.toLocaleUpperCase();
});
console.log(novaArray);

const numeros = [2, 4, 5, 6, 78];
const numerosx2 = numeros.map(n => n * 2);
console.table(numeros);
console.table(numerosx2);

const aulas = [
  {
    nome: 'HTML 1',
    min: 15
  },
  {
    nome: 'HTML 2',
    min: 10
  },
  {
    nome: 'CSS 1',
    min: 20
  },
  {
    nome: 'JS 1',
    min: 25
  },
]

const tempoAulas = aulas.map(aula => aula.min);
console.log(tempoAulas);

const nomeAulas = aula => aula.nome;

const arrayNomeAulas = aulas.map(nomeAulas);
console.log(arrayNomeAulas);

// ----- Reduce -----
const reduceAulas = aulas.reduce((acumulador, item, index, array) => {
  console.log(acumulador , item, index, array);
  return acumulador + item.min;
}, 0)

const maiorNumero = numeros.reduce((acumulador, item) => {
  return acumulador > item ? acumulador : item;
  // if(acumulador > item)
  //   return acumulador;
  // else
  //   return item;
},0);
console.log(maiorNumero);

const listaAulas = aulas.reduce((acumulador, atual, index) => {
  acumulador[index] = atual.nome;
  return acumulador
}, {});
console.log(listaAulas);

/* passo a passo do reduce
const aulas = [10, 25, 30];

// 1
aulas.reduce((0, 10) => {
  return 0 + 10;
}, 0); // retorna 10

// 2
aulas.reduce((10, 25) => {
  return 10 + 25;
}, 0); // retorna 35

// 3
aulas.reduce((35, 30) => {
  return 35 + 30;
}, 0); // retorna 65

*/

// ------ Array.some() ------
const frutas = ['Banana', 'Pêra', 'Uva'];

const temUva = frutas.some((item) => {
  return item === 'Uva';
});
console.log(temUva);

// ------ Array.every() ------
const every = frutas.every((item) => {
  return item === 'Uva';
});
console.log(every);

const maiorQue3 = numeros.every(n  => n < 3);
console.log(maiorQue3)