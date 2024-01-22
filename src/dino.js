    // Board
    let board;
    let boardWidth = 750;
    let boardHeight = 250;
    let context;
    
    // Dino
    let dinoWidth = 88;
    let dinoHeight = 94;
    let dinoX = 50;
    let dinoY = boardHeight - dinoHeight;
    let dinoImg = new Image("../../assets/Coffee run/Standing.png");

    let dino = {
        x: dinoX,
        y: dinoY,
        width: dinoWidth,
        height: dinoHeight,
    }

    window.onload = function() {
        board = document.getElementById("board")
        board.height = boardHeight;
        board.width = boardWidth;

        context = board.getContext("2d");

        context.fillStyle = "green";;
        context.fillRect(dino.x, dino.y, dino.width, dino.height);
    }