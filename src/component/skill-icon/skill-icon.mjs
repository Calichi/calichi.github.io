'use strict';

class SkillIcon extends HTMLElement {

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

export { SkillIcon };