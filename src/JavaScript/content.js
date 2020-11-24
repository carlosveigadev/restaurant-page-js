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
  mainContainer.className = 'grid grid-cols-2';
  restaurantImage.className = 'm-10 rounded'
  // tabsDiv
  
  // title.textContent = "Restaurant";
  // content.appendChild(navContainer);
  // navContainer.appendChild(title);
  // navContainer.className = "grid grid-cols-1";
  // title.className = "place-self-center p-8 font-bold";

};
