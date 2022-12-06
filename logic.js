
// Create cols*rows amount of tiles, and line them up side by side. 
// Then using CSS we make them into a grid with display: grid
function buildBoard(cols, rows) {
    const board = document.querySelector(".board");
    // Sets the amount of columns and rows needed and sizes them equally
    board.style.gridTemplateColumns = `repeat(${cols}, 1fr)`;
    board.style.gridTemplateRows = `repeat(${rows}, 1fr)`;
    for (let i = 0; i<(cols*rows); i++) {
        
        let tile = document.createElement('div');
        tile.className = 'tile';

        document.querySelector('.board').appendChild(tile);

    }
    
}

// Changing classes to change the color
function paintTile(e){
    e.target.classList.add('painted');
}

function flowTile(e){
    e.target.classList.add('flowing');
}

function changeToPaintMode(e){
    tiles.forEach(tile => tile.removeEventListener('mouseover', flowTile));
    tiles.forEach(tile => tile.addEventListener('mouseover', paintTile));
    console.log(e.target)
}

function changeToFlowMode(e){
    tiles.forEach(tile => tile.removeEventListener('mouseover', paintTile));
    tiles.forEach(tile => tile.addEventListener('mouseover', flowTile));
    console.log(e.target);
}

function clearBoard(e){
    tiles.forEach(tile => tile.classList.remove("painted", "flowing"));
}

function changeBoardSize(){
    let cols = prompt("How many cols?");
    let rows = prompt("How many rows?");
    console.log(cols, rows);
    buildBoard(parseInt(cols), parseInt(rows))
}

buildBoard(40, 40);

const tiles = document.querySelectorAll(".tile");
const drawButton = document.querySelector("#draw-button");
const flowButton = document.querySelector("#flow-button");
const clearButton = document.querySelector("#clear-button");
const changeSizeButton = document.querySelector('#size-button');

flowButton.addEventListener('click', changeToFlowMode);
drawButton.addEventListener('click', changeToPaintMode);
clearButton.addEventListener('click', clearBoard);
changeSizeButton.addEventListener('click', changeBoardSize);

