'use strict';


const handleBoard = (function () {
    let board = [
        ['','',''],
        ['','',''],
        ['','',''],
    ];

    return {board};
})();

function createPlayer(name, symbol){
    return { name, symbol }
};

const checkWin = (player) => {
    let x = 0;
    let o = 0;
    let board = handleBoard.board;

    //CHECKING HORIZONTAL WINS
    for (let i = 0; i < board.length; i++){
        for (let a = 0; a < board[i].length; a++) {
            if (board[i][a] === 'x'){
                x++;
                o = 0;
            } else if (board[i][a] === 'o'){
                o++;
                x = 0;
            } else {
                x = 0;
                o = 0;
            };
        };

        if (x === 3 || o === 3){
            return `${player} wins!`;
        } else {
            x = 0;
            o = 0;
        };
    };

    //CHECKING VERTICAL WINS
    let col1 = [];
    let col2 = [];
    let col3 = [];

    for (let i = 0; i < board.length; i++){//creating verticalArrays
        col1.push(board[i][0]);
        col2.push(board[i][1]);
        col3.push(board[i][2]);
    };
    let verticalArrays = [col1, col2, col3];

    for (let i = 0; i < verticalArrays.length; i++){//checking verticalArrays for matches
        for (let a = 0; a < verticalArrays[i].length; a++){
            if (verticalArrays[i][a] === 'x'){
                x++;
                o = 0;
            } else if (verticalArrays[i][a] === 'o'){
                o++;
                x = 0;
            } else {
                x = 0;
                o = 0;
            };
        };

        if (x === 3 || o === 3){
            return `${player} wins!`;
        } else {
            x = 0;
            o = 0;
        };
    };


    //CHECKING DIAGONAL WINS
    let diag1 = [
        board[0][0],
        board[1][1],
        board[2][2]
    ];
    let diag2 = [
        board[0][2],
        board[1][1],
        board[2][0]
    ];
    let diagonalArrays = [diag1, diag2];

    for (let i = 0; i < diagonalArrays.length; i++) {
        for (let a = 0; a < diagonalArrays[i].length; a++) {
            if (diagonalArrays[i][a] === 'x'){
                x++;
                o = 0;
            } else if (diagonalArrays[i][a] === 'o'){
                o++;
                x = 0;
            } else {
                x = 0;
                o = 0;
            };
        };

        if (x === 3 || o === 3) {
            return `${player} wins!`;
        } else {
            x = 0;
            o = 0;
        };
    };

    return 'no winners!';
};


const updateBoard = function(row, col, symbol) {
    if (handleBoard.board[row][col] !== ''){
        return 'spot not empty!';
    };

    handleBoard.board[row][col] = symbol;
};


function resetGame() {
    handleBoard.board = [
        ['','',''],
        ['','',''],
        ['','','']
    ];

    gameController();
};

function gameController() {
    const firstPlayer = createPlayer('player1', 'x');
    const secondPlayer = createPlayer('player2', 'o');
    let row, col;
    let activePlayer = secondPlayer;

    const switchPlayerTurn = () => {
        activePlayer = activePlayer === firstPlayer ? secondPlayer : firstPlayer;
    };

    const printNewRound = () => {
        console.log(handleBoard.board);
        console.log(`${activePlayer.name}'s Turn!`);
        row = prompt(`enter row index to place ${activePlayer.symbol}`);
        col = prompt(`enter column index to place ${activePlayer.symbol}`);

        if (updateBoard(row, col, activePlayer.symbol) === 'spot not empty!'){
            console.log('spot is not empty.. try again..');
            printNewRound();
        };
    };

    while (checkWin(activePlayer.name) === 'no winners!'){
        switchPlayerTurn();
        printNewRound();
    };

    console.log(checkWin(activePlayer.name));
    resetGame();

};

gameController();



