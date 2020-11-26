function mainContent() {
  const content = document.getElementById('content');
  const mainContainer = document.createElement('div');
  const restaurantImage = document.createElement('img');
  const tabsDiv = document.createElement('div');
  tabsDiv.setAttribute('id', 'tabsDiv');
  restaurantImage.setAttribute('src', '../src/assets/imgs/restaurant.jpg');
  restaurantImage.setAttribute('alt', 'Restaurant Image');
  content.appendChild(mainContainer);
  mainContainer.appendChild(restaurantImage);
  mainContainer.appendChild(tabsDiv);
  mainContainer.className = 'grid grid-cols-2 px-10';
  restaurantImage.className = 'rounded';
  const tabs = document.createElement('ul');
  const tabsMenu = ['Appetizers', 'Main Dishes', 'Desserts'];
  tabsMenu.forEach(element => {
    const item = document.createElement('li');
    const anchor = document.createElement('a');
    item.appendChild(anchor);
    anchor.innerHTML = element;
    item.className = 'button-tab p-2 text-2xl';
    element = element.split(' ').join('');
    anchor.setAttribute('href', `#${element}`);
    tabs.appendChild(item);
  });
  tabsDiv.appendChild(tabs);
  tabs.className = 'flex mx-10';
  tabs.firstChild.className += ' active';
}

export default mainContent;
