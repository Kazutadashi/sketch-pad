function buildBoard() {
    
    for (let i = 0; i<256; i++) {
        
        let tile = document.createElement('div');
        tile.className = 'tile';

        document.querySelector('.board').appendChild(tile);

    }
    
}

function paintTile(e){
    e.target.style.backgroundColor = "black";
    console.log('i was hovered');
}

function flowTile(e){
    e.target.style.transition = "2s";
    e.target.style.backgroundColor = "black";
}

function changeToPaintMode(e){
    tiles.forEach(tile => tile.addEventListener('mouseover', paintTile));
    console.log(e.target)
}

function changeToFlowMode(e){
    tiles.forEach(tile => tile.addEventListener('mouseover', flowTile));
    console.log(e.target);
}

buildBoard();

const tiles = document.querySelectorAll(".tile");
const drawButton = document.querySelector("#draw-button");
const flowButton = document.querySelector("#flow-button");

flowButton.addEventListener('click', changeToFlowMode);
drawButton.addEventListener('click', changeToPaintMode);


