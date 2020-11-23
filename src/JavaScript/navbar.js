export function navbar() {
  const content = document.getElementById('content');
  const navContainer = document.createElement('nav');
  const title = document.createElement('h1');
  title.textContent = "This is a Restaurant Page";
  content.appendChild(navContainer);
  navContainer.appendChild(title);
}
