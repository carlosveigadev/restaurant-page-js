function mainDishes() {
  const tabsDiv = document.getElementById('tabsDiv');
  const mainDiv = document.createElement('div');
  const mainDishImg = document.createElement('img');
  const contentMainDish = document.createElement('div');
  const mainDishParagraphs = document.createElement('p');
  const mainDishes = ['Bacon-Wrapped Pesto Pork Tenderloin', 'Prime Rib with Fresh Herb Sauce', 'Duck Breasts with Apricot Chutney', 'Pork Tenderloin with Three-Berry Salsa', "Nana's Italian Roulade", 'Balsamic Roast Chicken', "World's Best Lasagna", 'Low Carb Turkey-Stuffed Peppers'];
  mainDishes.forEach(element => {
    mainDishParagraphs.innerHTML += `- ${element};<br>`;
  });
  tabsDiv.appendChild(mainDiv);
  mainDiv.appendChild(mainDishImg);
  mainDiv.appendChild(contentMainDish);
  mainDiv.setAttribute('id', 'MainDishes');
  contentMainDish.appendChild(mainDishParagraphs);
  mainDiv.className = 'mx-10 tab-pane';
  mainDishParagraphs.className = 'font-bold text-xl text-yellow-900 py-4';
  mainDishImg.setAttribute('src', '../src/assets/imgs/mainDish.png');
  mainDishImg.className = 'w-full rounded';
}

export default mainDishes;