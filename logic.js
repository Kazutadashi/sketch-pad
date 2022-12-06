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

buildBoard();

const tiles = document.querySelectorAll(".tile");
tiles.forEach(tile => tile.addEventListener('mouseover', paintTile));

