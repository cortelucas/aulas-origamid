// Crie uma função que verifique
// corretamente o tipo de dado
function verficarDado(dado) {
  return Object.prototype,toString.call(dado);
}
console.log(verficarDado({})); //[object Object]

// Crie um objeto quadrado com
// a propriedade lados e torne
// ela imutável

// Previna qualquer mudança
// no objeto abaixo
const configuracao = {
  width: 800,
  height: 600,
  background: '#333'
}

// Liste o nome de todas
// as propriedades do
// protótipo de String e Array
