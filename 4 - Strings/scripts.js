// Utilizando o foreach na array abaixo,
// some os valores de Taxa e os valores de Recebimento

let transacoes = [
  {
    descricao: 'Taxa do Pão',
    valor: 'R$ 39',
  },
  {
    descricao: 'Taxa do Mercado',
    valor: 'R$ 129',
  },
  {
    descricao: 'Recebimento de Cliente',
    valor: 'R$ 99',
  },
  {
    descricao: 'Taxa do Banco',
    valor: 'R$ 129',
  },
  {
    descricao: 'Recebimento de Cliente',
    valor: 'R$ 49',
  },
];
let taxaTotal = 0;
transacoes.forEach((transacao) => {
  const numeroLimpo = parseFloat(transacao.valor.replace('R$ ', ''));
  if (transacao.descricao.slice(0,4) === 'Taxa'){
    taxaTotal += numeroLimpo;
  }
});
console.log(`O total dos valores são R$ ${taxaTotal}`);

// Retorne uma array com a lista abaixo
const transportes = 'Carro;Avião;Trem;Ônibus;Bicicleta';
const arrayTransporter = transportes.split(';');
console.log(arrayTransporter);


// Substitua todos os span's por a's
let html = `<ul>
                <li><span>Sobre</span></li>
                <li><span>Produtos</span></li>
                <li><span>Contato</span></li>
              </ul>`;

html = html.split('span').join('a');

// Retorne o último caracter da frase
const frase = 'Melhor do ano!';
console.log(frase[frase.length - 1] && frase.slice(-1));

// Retorne o total de taxas
//const transacoes = ['Taxa do Banco', '   TAXA DO PÃO', '  taxa do mercado', 'depósito Bancário', 'TARIFA especial'];


