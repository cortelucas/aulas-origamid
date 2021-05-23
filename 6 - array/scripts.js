const comidas = ['Pizza', 'Frango', 'Carne', 'Macarrão'];
// Remova o primeiro valor de comidas e coloque em uma variável
// Remova o último valor de comidas e coloque em uma variável
// Adicione 'Arroz' ao final da array
// Adicione 'Peixe' e 'Batata' ao início da array

const primeiroValor = comidas.shift();
const ultimoValor = comidas.pop();
comidas.push('Arroz');
comidas.unshift('Peixe', 'Batata')

console.log(`
  ${primeiroValor}
  ${ultimoValor}
  ${comidas}
`)

const estudantes = ['Marcio', 'Brenda', 'Joana', 'Kleber', 'Julia'];

console.log(`
  Arrume os estudantes em ordem alfabética
  ${estudantes.sort()}

  Inverta a ordem dos estudantes
  ${estudantes.reverse()}

  Verifique se Joana faz parte dos estudantes
  ${estudantes.includes('Joana')}
  
  Verifique se Juliana faz parte dos estudantes
  ${estudantes.includes('Juliana')}
`)

let html = `<section>
              <div>Sobre</div>
              <div>Produtos</div>
              <div>Contato</div>
            </section>`
// Substitua section por ul e div com li,
// utilizando split e join

const carros = ['Ford', 'Fiat', 'VW', 'Honda'];
// Remova o último carro, mas antes de remover
// salve a array original em outra variável
