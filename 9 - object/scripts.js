const Pessoa = new Object({
  nome: 'Lucas',
});
console.log(Pessoa.nome);

const Carro = {
  marca: 'Marca',
  rodas: 4,
  init(marca) {
    this.marca = marca;
    return this;
  },
  acelerar() {
    return this.marca + ' acelerou';
  },
  buzinar() {
    return this.marca + ' buzinou';
  }
}

const Honda = Object.create(Carro).init('Honda');
console.log(Honda.acelerar());

const Ferrari = Object.create(Carro).init('Ferrari');
console.log(Ferrari.buzinar());

const funcaoAutomovel = {
  acelerar(){
    return 'acelerou';
  },
  buzinar() {
    return 'buzinou';
  }
}

const moto = {
  rodas: 2,
  capacete: true,
}

// ----- Object.assign -----
Object.assign(moto, funcaoAutomovel);
console.log(moto)

// ----- Object.defineProperties -----
const moto2 = {};
Object.defineProperties(moto, {
  rodas: {
    get(){
      return this._rodas;
    },
    set(valor){
      this._rodas = valor * 4;
    },
  }
});