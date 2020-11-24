import { mainContent } from './JavaScript/content.js';
import { navbar } from './JavaScript/navbar.js';
import { appetizers } from './JavaScript/appetizers.js';

const restaurant = {
  init() {
    navbar();
    mainContent();
    
    this.eventListeners();
  },
  eventListeners() {
    appetizers();
  },
}

restaurant.init();
