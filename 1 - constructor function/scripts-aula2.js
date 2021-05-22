function Dom(seletor) {
  this.element = () => {
    return document.querySelector(seletor);
  },
  this.ativar = () => {
    this.element().classList.add('ativar');
  }
}
