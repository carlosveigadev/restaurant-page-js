function navbar() {
  const content = document.getElementById('content');
  const navContainer = document.createElement('nav');
  const title = document.createElement('h1');
  title.textContent = 'Restaurant 8 meals, ∞ pleasure.';
  content.appendChild(navContainer);
  navContainer.appendChild(title);
  navContainer.className = 'grid grid-cols-1';
  title.className = 'place-self-center p-8 font-bold text-4xl';
}

export default navbar;