// Transforme o objeto abaixo em uma Constructor Function
function Pessoa(nome, idade) {
  this.nome = nome;
  this.idade = idade;
  this.andar = (anda) => {
    if (anda === 'Sim')
      console.log(this.nome + ' andou');
    else
      console.log(this.nome + ' não andou');
  }
}

// Crie 3 pessoas, João - 20 anos,
// Maria - 25 anos, Bruno - 15 anos
const pessoas = [];
const joao = new Pessoa('João', 20);
joao.andar('Sim');
const maria = new Pessoa('Maria', 25);
maria.andar('Sim');
const bruno = new Pessoa('Bruno', 15);
bruno.andar('Não');
pessoas.push(joao, maria, bruno);
console.log(pessoas)

// Crie uma Constructor Function (Dom) para manipulação
// de listas de elementos do dom. Deve conter as seguintes
// propriedades e métodos:
//
// elements, retorna NodeList com os elementos selecionados
// addClass(classe), adiciona a classe a todos os elementos
// removeClass(classe), remove a classe a todos os elementos

function Dom(seletor) {
  const elementList = document.querySelectorAll(seletor);
  this.element = elementList;

  this.addClass = function(classe) {
    elementList.forEach((element) => {
      element.classList.add(classe);
    });
  }

  this.removeClass = function(classe) {
    elementList.forEach((element) => {
      element.classList.remove(classe);
    });
  }
}