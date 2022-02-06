// row x col grid
const cols = 32;
const rows = 32;


// Clear button resets color grid
const clearButton = document.querySelector('#clearBtn');
// From color palette
const colorPalette = document.querySelector('#palette');
// eraser
const eraser = document.querySelector('#eraser');


//Color to sketch with. Initially default value of input element
// is set variably thorugh function paletteColor
var color = colorPalette.getAttribute('value');

// get grid container and give it a size of rows x cols
const gridContainer = document.querySelector('.grid-container');
gridContainer.style.setProperty('--grid-rows', rows);
gridContainer.style.setProperty('--grid-cols', cols);

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
    console.log();
});