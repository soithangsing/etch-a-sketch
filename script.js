'use strict'

let currentSize = 16;

let currentMode = 'brush';

const gridContainerElement = document.querySelector('.grid__container');
const eraseButton = document.getElementById('eraser-button');
const slider = document.getElementById('myRange');
const sliderValue = document.querySelector('.size__value');
const brushButton = document.getElementById('color-button');
const eraserButton = document.getElementById('rubber-button');

// *********Create Grid Function start 

function createGrid(size) {
    gridContainerElement.style.gridTemplateColumns = `repeat(${size}, 1fr)`;
    gridContainerElement.style.gridTemplateRows = `repeat(${size}, 1fr)`;
    
    for(let i =0; i < size * size; i++) {
        let div = document.createElement('div');
                div.classList.add('grid__items')
                gridContainerElement.appendChild(div);
                div.addEventListener('mouseenter', function(e) {
                    e.target.style.backgroundColor = randomColor();
                })
            }
        }

// *********Create Grid Function end
        
// *********Random Color Function 
    
const randomInt = (min,max) => Math.floor(Math.random() * (max - min + 1) + min);
    
const randomColor = () => `rgb(${randomInt(0,255)},${randomInt(0,255)},${randomInt(0,255)})`;

// *********Random Color Function end

createGrid(currentSize);

const gridItems = document.querySelectorAll('.grid__items');

// Function for sketching

gridItems.forEach(item => {
    item.addEventListener('mouseenter', function(e) {
        item.style.backgroundColor = randomColor();
    })
})

eraseButton.addEventListener('click', function(e) {
    gridContainerElement.innerHTML = ``;
    createGrid(currentSize);
})
// Function for sketching end


slider.onmousemove = (e) => updateSizeValue(e.target.value);
slider.onchange = (e) => {
    currentSize = e.target.value;
    gridContainerElement.innerHTML = ``;
    createGrid(currentSize);
}
brushButton.onclick = (e) => colorStart(e.target);
eraserButton.onclick = (e) => eraseStart(e.target);

function updateSizeValue (value) {
    sliderValue.innerHTML = `${value} x ${value}`;
}

function activeButton(element) {
    element.classList.add('active__button');
}

function colorStart(event) {
    activeButton(event);
}

function eraseStart(event) {
    activeButton(event);
}