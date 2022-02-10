'use strict'

let currentSize = 16;

let currentMode = 'brush';

let currentColor = '#d11f1b';

const gridContainerElement = document.querySelector('.grid__container');
const eraseButton = document.getElementById('eraser-button');
const slider = document.getElementById('myRange');
const sliderValue = document.querySelector('.size__value');
const brushButton = document.getElementById('color-button');
const eraserButton = document.getElementById('rubber-button');
const colorPicker = document.querySelector('.color__input');

// function to set current Mode

function setCurrentMode(newMode) {
    activateButton(newMode)
    currentMode = newMode;
}

// function to set current color

function setCurrentColor (newColor) {
    currentColor = newColor;
}
        
// *********Random Color Function 
    
const randomInt = (min,max) => Math.floor(Math.random() * (max - min + 1) + min);
    
const randomColor = () => `rgb(${randomInt(0,255)},${randomInt(0,255)},${randomInt(0,255)})`;

// *********Random Color Function end

createGrid(currentSize);
activateButton('brush');

const gridItems = document.querySelectorAll('.grid__items');

// Function for sketching
/*
gridItems.forEach(item => {
    item.addEventListener('mouseenter', function(e) {
        item.style.backgroundColor = randomColor();
    })
})
*/

eraseButton.addEventListener('click', function(e) {
    gridContainerElement.innerHTML = ``;
    createGrid(currentSize);
})
 
// Function for sketching end

// Event Handlers
colorPicker.onchange = (e) => setCurrentColor(e.target.value)
brushButton.onclick = () => setCurrentMode('brush');
eraserButton.onclick = () => setCurrentMode('rubber');
slider.onmousemove = (e) => updateSizeValue(e.target.value);
slider.onchange = (e) => {
    currentSize = e.target.value;
    gridContainerElement.innerHTML = ``;
    createGrid(currentSize);
}

let mouseDown = false;

document.body.onmousedown = () => (mouseDown = true);
document.body.onmouseup = () => (mouseDown = false);
// brushButton.onclick = (e) => colorStart(e.target);
// eraserButton.onclick = (e) => eraseStart(e.target);

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

// *********Create Grid Function start 

function createGrid(size) {
    gridContainerElement.style.gridTemplateColumns = `repeat(${size}, 1fr)`;
    gridContainerElement.style.gridTemplateRows = `repeat(${size}, 1fr)`;
    
    for(let i =0; i < size * size; i++) {
        let div = document.createElement('div');
                div.classList.add('grid__items')
                div.addEventListener('mouseover', changeColor)
                div.addEventListener('mousedown', changeColor)
                gridContainerElement.appendChild(div);
            }
        }

// *********Create Grid Function end

// Color Brush and Erase function 

function changeColor(e) {
    if (e.type === 'mouseover' && !mouseDown) return;
    
    if(currentMode === 'brush') {
        e.target.style.backgroundColor = currentColor;
    } else if (currentMode === 'rubber') {
        e.target.style.backgroundColor = '#fff';
    }
}

// Active button

// function to activate button (add active class)
function activateButton(newMode) {
    if (currentMode === 'brush') {
        brushButton.classList.remove('active__button');
    } else if(currentMode === 'rubber') {
        eraserButton.classList.remove('active__button');
    }

    if(newMode === 'brush') {
        brushButton.classList.add('active__button');
    } else if(newMode === 'rubber') {
        eraserButton.classList.add('active__button');
    }
}