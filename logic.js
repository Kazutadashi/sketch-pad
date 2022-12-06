function buildBoard(cols, rows) {
    const board = document.querySelector(".board");
    board.style.gridTemplateColumns = `repeat(${cols}, 1fr)`;
    board.style.gridTemplateRows = `repeat(${rows}, 1fr)`;
    for (let i = 0; i<(cols*rows); i++) {
        
        let tile = document.createElement('div');
        tile.className = 'tile';

        document.querySelector('.board').appendChild(tile);

    }
    
}

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

buildBoard(20, 20);

const tiles = document.querySelectorAll(".tile");
const drawButton = document.querySelector("#draw-button");
const flowButton = document.querySelector("#flow-button");
const clearButton = document.querySelector("#clear-button");

flowButton.addEventListener('click', changeToFlowMode);
drawButton.addEventListener('click', changeToPaintMode);
clearButton.addEventListener('click', clearBoard);

