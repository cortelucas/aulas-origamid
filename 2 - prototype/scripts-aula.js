// ----- Aula 01 ------

// function Pessoa(nome, idade) {
//   this.nome = nome;
//   this.idade = idade;
// }

// Pessoa.prototype.andar = function () {
//   return 'Pessoa andou';
// }

// const p1 = new Pessoa('Lucas', 27);

// console.log(Pessoa.prototype);
// console.log(p1.prototype);


// ----- Aula 02 -----
const pais = 'Brasil';
const cidade = new String('Rio');

const listaAnimais = ['Cachorro', 'gato', 'cavalo'];

const listaLI = document.querySelectorAll('li');
//const listaTransformadaEmArray = Array.prototype.slice.call(listaLI);
const listaTransformadaEmArray = Array.from(listaLI);

const carro = {
  marca: 'Ford',
  preco: 2000,
  acelerar() {
    return true;
  }
}