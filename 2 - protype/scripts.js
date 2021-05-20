function Pessoa(nome, idade) {
  this.nome = nome;
  this.idade = idade;
}

Pessoa.prototype.andar = function () {
  return 'Pessoa andou';
}

const p1 = new Pessoa('Lucas', 27);

console.log(Pessoa.prototype);
console.log(p1.prototype);