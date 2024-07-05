'use strict';

import { Icon } from './component/icon/icon.mjs';

customElements.define('ahc-icon', Icon);

let menuNavigation = document.getElementById('navigation-panel');
let buttonCloseMenu = document.getElementById('hidden-button');
let buttonOpenMenu = document.getElementById('show-button');

buttonOpenMenu.addEventListener('click', (event) => {
    event.stopImmediatePropagation();
    buttonOpenMenu.style.display = 'none';
    buttonCloseMenu.style.display = 'inline-block';
    menuNavigation.style.display = 'flex';
});

buttonCloseMenu.addEventListener('click', (event) => {
    event.stopImmediatePropagation();
    buttonCloseMenu.style.display = 'none';
    buttonOpenMenu.style.display = 'inline-block';
    menuNavigation.style.display = 'none';
});