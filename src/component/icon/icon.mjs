'use strict';

class Icon extends HTMLElement {

  constructor() {
    super();
    this.#load();
  }

  #load() {
    const src = this.getAttribute('src');
    const shadow = this.attachShadow({mode: 'open'});

    fetch(src)
    .then(response => response.text())
    .then(data => {shadow.innerHTML = data;});
  }

}

export { Icon as Icon };