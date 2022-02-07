const DEFAULT_SIZE = 16;
const DEFAULT_COLOR = '#000000';
const DEFAULT_MODE = 'color';
const DEFAULT_BACKGROUND = '#ffffff';

let currentColor = DEFAULT_COLOR;
let currentMode = DEFAULT_MODE;
let currentSize = DEFAULT_SIZE;
let currentBackground = DEFAULT_BACKGROUND;


function setCurrentColor(newColor) {
    currentColor = newColor;
}

function setCurrentMode(newMode) {
    currentMode = newMode;
}

function setCurrentSize(newSize) {
    // increment grid size in powers of 2
    // from 2^4 -> 2^7
    let power = newSize;
    let result = Math.pow(2, power);
    // display above slider
    currentSize = result;
}

function setCurrentBackground(newColor) {
    currentBackground = newColor;
}

const display = document.querySelector("#slider-display");
const slider = document.querySelector('#slider');
const colorPalette = document.querySelector('#palette');
const colorButton = document.querySelector('#palette-select');
const backgroundPalette = document.querySelector('#background-palette');
const backgroundButton = document.querySelector('#background-select');
const rainbowColor = document.querySelector('#rainbow');
const clearButton = document.querySelector('#clearBtn');
const eraser = document.querySelector('#eraser');
const gridContainer = document.querySelector('.grid-container');

colorPalette.addEventListener('change', e => setCurrentColor(e.target.value));
colorButton.addEventListener('click', () => setCurrentMode('color'));
backgroundPalette.addEventListener('change', e => changeBackgroundColor(e.target.value));
rainbowColor.addEventListener('click', () => setCurrentMode('rainbow'));
clearButton.addEventListener('click', () => {
    clearGrid();
    setupGrid(currentSize);
});
eraser.addEventListener('click', () => setCurrentMode('eraser'));
slider.addEventListener('mousemove', (e) => updateDisplay(e.target.value));
slider.addEventListener('change', (e) => changeSize(e.target.value));

function setupGrid() {
    gridContainer.style.setProperty('--grid-rows', currentSize);
    gridContainer.style.setProperty('--grid-cols', currentSize);

    // fill the grid container with grid items
    for (let i = 0; i < (currentSize * currentSize); i++) {
        const gridItem = document.createElement('div'); // create grid item
        gridItem.addEventListener('mouseover', (e) => changeColor(e));
        gridItem.className = "grid-item";
        gridItem.style.setProperty('--background-color', currentBackground);
        gridContainer.appendChild(gridItem); // set style and add to grid

    }
}

function clearGrid() {
    gridContainer.innerHTML = '';
}

function reloadGrid() {
    clearGrid();
    setupGrid(currentSize);
}

function changeSize(size) {
    setCurrentSize(size);
    updateDisplay(size);
    reloadGrid();
}

function changeBackgroundColor(color) {
    setCurrentBackground(color);
    reloadGrid();
}

function updateDisplay(size) {
    display.innerText = `${0+currentSize} x ${0+currentSize}`
}


function changeColor(e) {
    if (currentMode === 'rainbow') {
        const randomR = Math.floor(Math.random() * 256);
        const randomG = Math.floor(Math.random() * 256);
        const randomB = Math.floor(Math.random() * 256);
        e.target.style.backgroundColor = `rgb(${randomR}, ${randomG}, ${randomB})`;

    }
    if (currentMode === 'color') {
        e.target.style.backgroundColor = currentColor;
    }
    if (currentMode === 'eraser') {
        e.target.style.backgroundColor = currentBackground;
    }
}

function calcRainbowColor() {

    return rainbowValue;
}

window.addEventListener('load', () => {
    setupGrid();
    updateDisplay(currentSize);
});