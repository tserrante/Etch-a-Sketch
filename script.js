// row x col grid
const cols = 32;
const rows = 32;

// dimensions display
const display = document.querySelector("#display");

//grid dimension slider
const dims = document.querySelector('#dimensions');
// get default dimensions of slider
const defDims = dims.getAttribute('value');
// display default dimensions
display.innerText = `${0+Math.pow(2, defDims)} x ${0+Math.pow(2, defDims)}`;

// From color palette
const colorPalette = document.querySelector('#palette');

// Clear button resets color grid
const clearButton = document.querySelector('#clearBtn');

// eraser
const eraser = document.querySelector('#eraser');


//Color to sketch with. Initially default value of input element
// is set variably thorugh function paletteColor
var color = colorPalette.getAttribute('value');

// get grid container and give it a size of rows x cols
const gridContainer = document.querySelector('.grid-container');
gridContainer.style.setProperty('--grid-rows', dims.value);
gridContainer.style.setProperty('--grid-cols', dims.value);

// fill the grid container with grid items
for (let i = 0; i < (rows * cols); i++) {
    let gridItem = document.createElement('div'); // create grid item
    gridContainer.appendChild(gridItem).className = "grid-item"; // set style and add to grid
}


const gridItems = document.querySelectorAll('.grid-item');
gridItems.forEach((item) => {
    item.addEventListener('mouseover', () => {
        item.style.backgroundColor = color;
    });
});


colorPalette.addEventListener('change', (e) => {
    color = e.target.value;
});
clearButton.addEventListener('click', () => {
    gridItems.forEach((item) => {
        item.style.backgroundColor = 'white';
    });
});
eraser.addEventListener('click', () => {
    color = 'white';
});
dims.addEventListener('change', (e) => {
    // increment grid size in powers of 2
    // from 2^3 -> 2^9
    let power = e.target.value;
    let result = Math.pow(2, power);
    // display above slider
    display.innerText = `${0+result} x ${0+result}`;
});