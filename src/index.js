import { mainContent } from './JavaScript/mainContent.js';
import { navbar } from './JavaScript/navbar.js';
import { appetizers } from './JavaScript/appetizers.js';
import { mainDishes } from './JavaScript/mainDishes.js';
import { desserts } from './JavaScript/desserts.js';

const restaurant = {
  init() {
    navbar();
    mainContent();
    appetizers();
    mainDishes();
    desserts();
    this.eventListeners();
  },
  eventListeners() {
    function onTabClick() {
      
    };
    const tabs = document.getElementById('tabsDiv');
    tabs.addEventListener('click', onTabClick, false);
  }
}

restaurant.init();
