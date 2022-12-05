function buildBoard() {
    
    for (let i = 0; i<16; i++) {
        
        let tile = document.createElement('div');
        tile.className = 'tile';

        document.querySelector('.board').appendChild(tile);

    }
    
}

buildBoard();