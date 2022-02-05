// row x col grid
const cols = 32;
const rows = 32;



// From color palette
const colorPalette = document.querySelector('#palette');

// sets color variable through event listener
function setColor(e) {
    color = e.target.value;
}

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


colorPalette.addEventListener('change', setColor);