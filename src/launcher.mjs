'use strict';

import { Icon } from './component/icon/icon.mjs';

customElements.define('ahc-icon', Icon);

let header = document.getElementById('menu');
let menuNavigation = document.getElementById('menu-navigation');
let buttonCloseMenu = document.getElementById('close-menu');
let buttonOpenMenu = document.getElementById('open-menu');

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