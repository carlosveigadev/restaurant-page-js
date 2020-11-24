// import tabsDiv
export function mainContent() {
  const content = document.getElementById('content');
  const mainContainer = document.createElement('div');
  const restaurantImage = document.createElement('img');
  const tabsDiv = document.createElement('div');
  tabsDiv.setAttribute('id', 'tabsDiv');
  restaurantImage.setAttribute('src', '/src/assets/imgs/restaurant.jpg');
  restaurantImage.setAttribute('alt', 'Restaurant Image');
  content.appendChild(mainContainer);
  mainContainer.appendChild(restaurantImage);
  mainContainer.appendChild(tabsDiv);
  mainContainer.className = 'grid grid-cols-2 px-10';
  restaurantImage.className = 'rounded'
  const tabs = document.createElement('ul');
  const tabsMenu = ['Appetizers', 'Main Dishes', 'Deserts'];
  tabsMenu.forEach(element => {
    var item = document.createElement('li');
    item.innerHTML = element;
    item.className = 'button-tab mx-2';
    tabs.appendChild(item);
  })
  tabsDiv.appendChild(tabs);
  tabs.className = 'flex'
  // tabsDiv
  
  // title.textContent = "Restaurant";
  // content.appendChild(navContainer);
  // navContainer.appendChild(title);
  // navContainer.className = "grid grid-cols-1";
  // title.className = "place-self-center p-8 font-bold";

};
