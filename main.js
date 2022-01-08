let container = document.querySelector('.section');
let show = document.querySelector('.show-code');
let button = document.querySelector('.btn');


button.addEventListener('click', () => {
    var color = getRandomColor();
    container.style.background = color;
    show.innerText = color;
})
function getRandomColor() {
    var letters = '0123456789ABCDEF';
    var color = '#';
    for (var i = 0; i < 6; i++) {
        color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
}