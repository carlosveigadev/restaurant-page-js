import { mainContent } from './JavaScript/mainContent.js';
import { navbar } from './JavaScript/navbar.js';
import { appetizers } from './JavaScript/appetizers.js';
import { mainDish } from './JavaScript/mainDish.js';
import { dessert } from './JavaScript/dessert.js';

const restaurant = {
  init() {
    navbar();
    mainContent();
    this.eventListeners();
  },
  eventListeners() {
    document.getElementsByClassName('button-tab')
  },
}

restaurant.init();
