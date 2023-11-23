'use strict';


const handleBoard = (function () {
    let board = [
        ['','',''],
        ['','',''],
        ['','',''],
    ];

    return {board};
})();


const firstPlayer = (function () {
    let name = prompt('enter first players name..');

    if (name === null){
        name = 'player 1';
    };

    return {name};
})();


const secondPlayer = (function () {
    let name = prompt('enter second players name..');

    if (name === null){
        name = 'player 2';
    };

    return {name};
})();


const checkWin = (function (board) {
    let x = 0;
    let o = 0;

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

        if (x === 3){
            return 'x wins!';
        } else if (o === 3){
            return 'o wins!';
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

        if (x === 3){
            return 'x wins!';
        } else if (o === 3) {
            return 'o wins!';
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

        if (x === 3) {
            return 'x wins!';
        } else if (o === 3) {
            return 'o wins!';
        } else {
            x = 0;
            o = 0;
        };
    };

    return 'no winners yet!';
})(handleBoard.board);


function updateBoard(row, col) {
    let board = handleBoard.board;

    console.log(row, col);
    console.log(board[row][col]);
};


function resetGame() {
    firstPlayer.name = 'player 1';
    secondPlayer.name = 'player 2';
    handleBoard.board = [
        ['','',''],
        ['','',''],
        ['','','']
    ];

    console.log(firstPlayer.name, secondPlayer.name, handleBoard.board);
};


(function handleTurns() {
    let name1 = firstPlayer.name;
    let name2 = secondPlayer.name;
    let board = handleBoard.board;

    let row, col;

    console.log(board);
    console.log(`${name1}'s Turn!`);



})();



