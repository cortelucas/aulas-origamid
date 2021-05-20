function Carro (marca, preco) {
  this.marca = marca;
  this.preco = preco;
}
const carros = [];

const civic = new Carro('Honda', 1000);
civic.marca = 'Honda';
civic.preco = 100000;
carros.push(civic);

const uno = new Carro('Fiat', 0);
carros.push(uno);

console.table(carros)

function Carro2 (marca, preco) {
  this.taxa = 1.2;
  const precoFinal = preco * this.taxa;
  this.marca = marca;
  this.preco = precoFinal;
}

const gol = new Carro2('VW', 10000);