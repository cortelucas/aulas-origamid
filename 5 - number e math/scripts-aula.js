// ----- Number -----
const preco = 59.49
const gasolina = 5.499;

console.log(`
  Number.isNaN - verifica se é number ou nao
  Number.isNaN(NaN) = ${Number.isNaN(NaN)}
  Number.isNaN(5 + 4) = ${Number.isNaN(5 + 4)}

  -----------------------------------------------

  Number.isInteger - verifica se é um number int
  Number.isInteger(5) = ${Number.isInteger(5)}
  Number.isInteger(5.4) = ${Number.isInteger(5.4)}

  -----------------------------------------------

  Number.parseFloat() = transforma String em number float
  Number.parseFloat('324.452') = ${Number.parseFloat('324.452')}
  Number.parseInt('23.49') = ${Number.parseInt('23.49')}

  -----------------------------------------------

  toFixed() - retorna valor arredondado com base nas casa decimais
  preco.toFixed() = ${preco.toFixed()}
  gasolina.toFixed(2) = ${gasolina.toFixed(2)}

  -----------------------------------------------

  toLocaleStrin() - formata numeros de acordo com a lingua passada
  preco.toLocaleString('en-US', {style: 'currency', currency: 'USD'}) = ${preco.toLocaleString('en-US', {style: 'currency', currency: 'USD'})}
  preco.toLocaleString('pt-BR', {style: 'currency', currency: 'BRL'}) = ${preco.toLocaleString('pt-BR', {style: 'currency', currency: 'BRL'})}
`);

// ----- Math -----
console.log(`
  Math.PI - retorna o PI
  Math.PI = ${Math.PI}

  -----------------------------------------------
  
  Math.abs() - Retorna valor absoluto;
  Math.abs(-5.5) = ${Math.abs(-5.5)}

  ------------------------------------------------

  Math.ceil() - Arredonda para inteiro para cima
  Math.ceil(4.8334) =  ${Math.ceil(4.8334)}
  Math.ceil(4.3) = ${Math.ceil(4.3)}

  ------------------------------------------------

  Math.floor - Aredonda para inteiro para baixo
  Math.floor(4.8334) = ${Math.floor(4.8334)} 
  Math.floor(4.3) = ${Math.floor(4.3)}

  -------------------------------------------------

  Math.round - Arredonda segundo regras matemáticas
  Math.round(4.8334) = ${Math.round(4.8334)} 
  Math.round(4.3) = ${Math.round(4.3)} 

  -------------------------------------------------

  Math.min e Math.max - retorna minimo e maximo
  Math.max(5,3,10,42,2) = ${Math.max(5,3,10,42,2)}
  Math.min(5,3,10,42,2) = ${Math.min(5,3,10,42,2)}

  -------------------------------------------------

  Math.random() - retorna numero aleatorio de 0 a 1
  Math.random() = ${Math.random()}
  Math.floor(Math.random() * 100) = ${Math.floor(Math.random() * 100)}
  Math.floor(Math.random() * 500) = ${Math.floor(Math.random() * 500)}

  --------------------------------------------------

  Número random entre 72 e 32
  Math.floor(Math.random() * (72 - 32 + 1)) + 32 = ${Math.floor(Math.random() * (72 - 32 + 1)) + 32} 
  Math.floor(Math.random() * (98 - 40 + 1)) + 40 = ${Math.floor(Math.random() * (98 - 40 + 1)) + 40}

`)