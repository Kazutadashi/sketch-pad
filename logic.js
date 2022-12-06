function buildBoard() {
    
    for (let i = 0; i<256; i++) {
        
        let tile = document.createElement('div');
        tile.className = 'tile';

        document.querySelector('.board').appendChild(tile);

    }
    
}

buildBoard();