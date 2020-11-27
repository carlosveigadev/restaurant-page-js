import mainContent from './JavaScript/mainContent';
import navbar from './JavaScript/navbar';
import appetizers from './JavaScript/appetizers';
import mainDishes from './JavaScript/mainDishes';
import desserts from './JavaScript/desserts';
import onTabClick from './JavaScript/onTabClick';

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
    const tabs = document.getElementById('tabsDiv');
    tabs.firstChild.addEventListener('click', onTabClick, false);
  },
};

restaurant.init();
