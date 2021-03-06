function mainMenuToggle() {
    var mainMenu = document.getElementById('main-menu');

    if (mainMenu.getAttribute('data-toggle') == 'hidden') {
        mainMenu.style.display = 'flex';
        mainMenu.setAttribute('data-toggle', 'visible');
    } else {
        mainMenu.style.display = 'none';
        mainMenu.setAttribute('data-toggle', 'hidden');
    }
}

function findABoatSubmitClick() {
    var event=new Event('click');
    document.getElementById('find-a-boat').dispatchEvent(event);
}

function subscribeClick() {
    var event=new Event('click');
    document.getElementById('subscribe').dispatchEvent(event);
}