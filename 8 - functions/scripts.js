// Retorne a soma total de caracteres dos
// parágrafos acima utilizando reduce
const ps = document.querySelectorAll('p');
const totalCaracteres = Array.prototype.reduce.call(ps, (cont, p) => {
  return cont + p.innerText.length;
}, 0);

console.log(totalCaracteres);

// Crie uma função que retorne novos elementos
// html, com os seguintes parâmetros
// tag, classe e conteudo.
function criarElemento(tag, classe, conteudo) {
  const elemento = document.createElement(tag);
  classe ? elemento.classList.add(classe) : null;
  conteudo ? elemento.innerHTML = conteudo : null;
  return elemento;
}

console.log(criarElemento('li', 'azul', 'Este é o conteúdo'))

// Crie uma nova função utilizando a anterior como base
// essa nova função deverá sempre criar h1 com a
// classe titulo. Porém o parâmetro conteudo continuará dinâmico
