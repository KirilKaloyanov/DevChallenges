
const toggleButton = document.querySelector('.hamburger');

const menu = document.querySelector('.menu');

const middleBar = document.querySelector('.middle-bar');
const upperBar = document.querySelector('.upper-bar');
const lowerBar = document.querySelector('.lower-bar');

let collapsed = 0;

toggleButton.addEventListener('click', function() {
    if (collapsed === 0) {
        collapsed = true;
    } else {
        collapsed = !collapsed;
        menu.classList.toggle('collapsed');
    }
    menu.classList.toggle('expanded');
    middleBar.classList.toggle('hidden-middle-bar');
    upperBar.classList.toggle('rotated-upper-bar');
    lowerBar.classList.toggle('rotated-lower-bar');
});