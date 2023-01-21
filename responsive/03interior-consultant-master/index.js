
const toggleButton = document.querySelector('.hamburger');

const menu = document.querySelector('.menu');

toggleButton.addEventListener('click', function(e) {
    menu.classList.toggle('expanded');
});