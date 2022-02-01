const gridContainerElement = document.querySelector('.grid__container');
const eraseButton = document.getElementById('eraser-button');

for(let i = 0; i < 16 * 16; i++) {
    let div = document.createElement('div');
    div.classList.add('grid__items')
    gridContainerElement.appendChild(div);
}

const gridItems = document.querySelectorAll('.grid__items');

// Random Color Function 

const randomInt = (min,max) => Math.floor(Math.random() * (max - min + 1) + min);

const randomColor = () => `rgb(${randomInt(0,255)},${randomInt(0,255)},${randomInt(0,255)})`;

gridItems.forEach(item => {
    item.addEventListener('mouseenter', function(e) {
        item.style.backgroundColor = randomColor();
    })
})

eraseButton.addEventListener('click', function(e) {
    gridItems.forEach(item => {
            item.style.backgroundColor = '#fff';
    })
})