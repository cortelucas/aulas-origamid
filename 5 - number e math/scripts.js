// ----- Number -----
console.log(Number.isNaN(NaN));
console.log(Number.isNaN(5 + 4));

console.log(Number.isInteger(5));
console.log(Number.isInteger(5.4));

console.log(Number.parseFloat('324.452'));
console.log(Number.parseInt('23.49'));

const preco = 59.49
console.log(preco.toFixed());
const gasolina = 5.499;
console.log(gasolina.toFixed(2));

preco.toLocaleString('en-US', {style: 'currency', currency: 'USD'});
preco.toLocaleString('pt-BR', {style: 'currency', currency: 'BRL'});

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