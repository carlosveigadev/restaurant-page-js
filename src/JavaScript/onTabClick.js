function onTabClick(event) {
  const activeTabs = document.querySelectorAll('.active');
  activeTabs.forEach((tab) => {
    tab.className = tab.className.replace('active', '');
  });
  event.target.parentElement.className += ' active';
  document.getElementById(event.target.href.split('#')[1]).className += ' active';
}

export default onTabClick;