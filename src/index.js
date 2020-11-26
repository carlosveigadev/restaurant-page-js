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
    function onTabClick(event) {
      let activeTabs = document.querySelectorAll('.active');
      activeTabs.forEach(function(tab) {
        tab.className = tab.className.replace('active', '');
      });
      event.target.parentElement.className += " active";
      document.getElementById(event.target.href.split('#')[1]).className += " active";
    };
    const tabs = document.getElementById('tabsDiv');
    tabs.firstChild.addEventListener('click', onTabClick, false);
  }
}

restaurant.init();
