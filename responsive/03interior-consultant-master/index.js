
const toggleButton = document.querySelector('.hamburger');

const menu = document.querySelector('.menu');

const middleBar = document.querySelector('.middle-bar');
const upperBar = document.querySelector('.upper-bar');
const lowerBar = document.querySelector('.lower-bar');

toggleButton.addEventListener('click', function(e) {
    menu.classList.toggle('expanded');
    middleBar.classList.toggle('hidden-middle-bar');
    upperBar.classList.toggle('rotated-upper-bar');
    lowerBar.classList.toggle('rotated-lower-bar');
});