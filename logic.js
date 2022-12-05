function buildBoard() {
    
    for (let i = 0; i<16; i++) {
        let tile = document.createElement('div');
        document.body.appendChild(tile);

        console.log('added div');
    }
    
}

buildBoard();