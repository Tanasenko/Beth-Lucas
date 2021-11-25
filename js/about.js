var button = document.querySelector('.about__btn');
var miniAbout = document.querySelector('.about__mini')
var img = document.querySelector('.about__img');
var close = document.querySelector('.close__btn');

function useMenu() {
    button.onclick = function () {
        img.style = 'display:none';
        button.style = 'display:none';
        miniAbout.style = 'display:block';        
    }
    close.onclick = function () {
        img.style = 'display:block';
        button.style = 'display:block';
        miniAbout.style = 'display:none';        
    }
}

useMenu();