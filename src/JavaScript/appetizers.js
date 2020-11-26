export function appetizers() {
  const tabsDiv = document.getElementById('tabsDiv');
  const appetizersDiv = document.createElement('div');
  const appetizerImg = document.createElement('img');
  const contentAppetizers = document.createElement('div');
  const appetizersParagraph = document.createElement('p');
  const appetizers = ['Air Fryer Stuffed Mushrooms', 'Amazing No Cook Spinach Artichoke Dip', 'Classic Savory Deviled Eggs', 'Best Hot Crab Dip', 'Pecan Snack', 'Orange and Rosemary Baked Olives'];
  appetizers.forEach(element => {
    appetizersParagraph.innerHTML += "-" + " " + element + ";<br>";
  });
  tabsDiv.appendChild(appetizersDiv);
  appetizersDiv.appendChild(appetizerImg);
  appetizersDiv.appendChild(contentAppetizers);
  appetizersDiv.setAttribute('id', 'Appetizers')
  contentAppetizers.appendChild(appetizersParagraph);
  appetizersDiv.className = 'mx-10 tab-pane active';
  appetizersParagraph.className = 'font-bold text-lg text-yellow-900';
  appetizerImg.setAttribute('src', '/src/assets/imgs/appetizers.png');
  appetizerImg.className = 'rounded'
};
