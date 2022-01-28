// row x col grid
const cols = 8;
const rows = 8;

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
        item.style.backgroundColor = 'red';
    });
});