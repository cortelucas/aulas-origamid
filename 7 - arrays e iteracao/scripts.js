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