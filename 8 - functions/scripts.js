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


// Crie uma nova função utilizando a anterior como base
// essa nova função deverá sempre criar h1 com a
// classe titulo. Porém o parâmetro conteudo continuará dinâmico
