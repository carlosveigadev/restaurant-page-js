// import tabs
export function mainContent() {
  const content = document.getElementById('content');
  const mainContainer = document.createElement('div');
  const restaurantImage = document.createElement('img');
  const tabs = document.createElement('div');
  tabs.setAttribute('id', 'tabs');
  restaurantImage.setAttribute('src', '/src/assets/imgs/restaurant.jpg');
  restaurantImage.setAttribute('alt', 'Restaurant Image');
  content.appendChild(mainContainer);
  mainContainer.appendChild(restaurantImage);
  mainContainer.appendChild(tabs);
  mainContainer.className = 'grid grid-cols-2';
  restaurantImage.className = 'm-10 rounded'
  // tabs
  
  // title.textContent = "Restaurant";
  // content.appendChild(navContainer);
  // navContainer.appendChild(title);
  // navContainer.className = "grid grid-cols-1";
  // title.className = "place-self-center p-8 font-bold";

};
