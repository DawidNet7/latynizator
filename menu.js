var menu = document.querySelector('.menu');

menu.addEventListener('click', function(event) {
    var menuContent = this.querySelector('.menu-content');
    menuContent.style.display = menuContent.style.display === 'flex' ? 'none' : 'flex';
    if (menuContent.style.display === 'flex') {
        menuContent.style.flexDirection = 'row'; 
        menuContent.style.justifyContent = 'space-between'; 
    }
    event.stopPropagation();
});

window.addEventListener('click', function() {
    var menuContent = document.querySelector('.menu-content');
    menuContent.style.display = 'none';
});
