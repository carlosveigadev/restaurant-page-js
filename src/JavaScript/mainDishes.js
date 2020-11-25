export function mainDishes() {
  const tabsDiv = document.getElementById('tabsDiv');
  const mainDiv = document.createElement('div');
  const mainDishImg = document.createElement('img');
  const contentMainDish = document.createElement('div');
  const mainDishParagraphs = document.createElement('p');
  const appetizers = ['Bacon-Wrapped Pesto Pork Tenderloin', 'Prime Rib with Fresh Herb Sauce', 'Duck Breasts with Apricot Chutney', 'Pork Tenderloin with Three-Berry Salsa', "Nana's Italian Roulade", 'Balsamic Roast Chicken'];
  appetizers.forEach(element => {
    mainDishParagraphs.innerHTML += "-" + " " + element + ";<br>";
  });
  tabsDiv.appendChild(mainDiv);
  mainDiv.appendChild(mainDishImg);
  mainDiv.appendChild(contentMainDish);
  contentMainDish.appendChild(mainDishParagraphs);
  mainDiv.className = 'mx-10 tab-pane';
  mainDishParagraphs.className = 'font-bold text-lg text-yellow-900';
  mainDishImg.setAttribute('src', '/src/assets/imgs/mainDish.png');
  mainDishImg.className = 'w-full rounded';
}