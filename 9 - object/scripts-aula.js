// ----- Aula 01 -----
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

// ----- Aula 02 -----
const frutas = ['Banana', 'Pêra'];

console.log(`
  ----- getOwnPropertyDescriptors -----
  Lista com métodos e propriedades e Array
  Object.getOwnPropertyDescriptors(Array) = ${Object.getOwnPropertyDescriptors(Array)}

  Lista com métodos e propriedades do protótipo de Array
  Object.getOwnPropertyDescriptors(Array.prototype = ${Object.getOwnPropertyDescriptors(JSON.toString(Array.prototype))}

  Puxa de uma única propriedade
  Object.getOwnPropertyDescriptor(window, 'innerHeight') = ${Object.getOwnPropertyDescriptor(window, 'innerHeight')}

  -----  keys() -----
  retorna uma array com as chaves de todas as propriedades diretas e enumeráveis do objeto
  Object.keys(Carro) = ${Object.keys(Carro)}

  ----- values() -----
  retorna uma array com os valores do objeto
  Object.values(Carro) = ${Object.values(Carro)}

  ----- entries() -----
  retorna uma array com array's contendo a chave e o valor.
  Object.entries(Carro) = ${Object.entries(Carro)}

  ----- getOwnPropertyNames() -----
  Retorna uma array com todas as propriedades diretas do objeto (não retorna as do protótipo).
  Object.getOwnPropertyNames(Array) = ${Object.getOwnPropertyNames(Array)}

  Object.getOwnPropertyNames(Array.prototype) = ${Object.getOwnPropertyNames(Array.prototype)}

  Object.getOwnPropertyNames(carro) = ${Object.getOwnPropertyNames(Carro)}

  ----- getPrototypeOf() -----
  getOwnPropertyNames
  Object.getPrototypeOf('') = ${Object.getPrototypeOf('')}
  Object.getPrototypeOf(frutas) = ${Object.getPrototypeOf(frutas)}

  ----- Object.freeze() -----
  impede qualquer mudança nas propriedades
  Object.freeze(carro)
  para verificar a função Object.isFrozen(carro);

  ----- Object.seal() -----
  previne a adição de novas propriedades e impede que as atuais sejam deletadas
  Object.seal(carro)
  para verificar a função Object.isSealed(carro);

  ----- Object.preventExtensions() -----
  previne a adição de novas propriedades.
  Object.preventExtensions(carro)
  para verificar a função Object.isExtensible(carro);
  só sera true se eu não ativei a função
`);

// ----- Aula 03 -----
const frase = 'Isto é uma String';
console.log(`
  {}.constructor retorna a função construtora do objeto
  frutas.constructor = ${frutas.constructor}

  ----- hasOwnProperty() -----
  Verifica se possui a propriedade e retorna true. A propriedade deve ser direta do objeto e não do protótipo
  frutas.hasOwnProperty('map') = ${frutas.hasOwnProperty('map')}

  Array.hasOwnProperty('map') = ${Array.hasOwnProperty('map')}

  Array.prototype.hasOwnProperty('map') = ${Array.prototype.hasOwnProperty('map')}

  ----- {}.propertyIsEnumerable() -----
  verifica se a propriedade é enumerável.
  Array.prototype.propertyIsEnumerable('map') = ${Array.prototype.propertyIsEnumerable('map')}

  window.propertyIsEnumerable('innerHeight') = ${window.propertyIsEnumerable('innerHeight')}

  ----- isPrototypeOf() -----
  Verifica se é o protótipo do valor passado.
  Array.prototype.isPrototypeOf(frutas) = ${Array.prototype.isPrototypeOf(frutas)}

  ----- toString() -----
  Retorna o tipo do objeto. O problema é toString() ser uma função dos protótipos de Array, String e mais. Por isso é comum utilizarmos a função direto do Object.prototype.toString.call(valor).
  
  frutas.toString() = ${frutas.toString()}
  ${typeof frutas}
  ${Object.prototype.toString.call(frutas)}

  frase.toString() = ${frase.toString()}
  ${typeof frase}
  ${Object.prototype.toString.call(frase)}

  Carro.toString() = ${Carro.toString()}
  ${typeof Carro}
  ${Object.prototype.toString.call(Carro)}
`);