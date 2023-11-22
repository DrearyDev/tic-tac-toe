'use strict';



const game = (function () {

    const handleBoard = (function () {
        let board = [
            ['x','x','x'],
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
    })(handleBoard.board);


    const handleTurns = (function (name1, name2, checkWin) {
        console.log(`Player 1: ${name1}\nPlayer 2: ${name2}`);

        console.log(checkWin);
    })(firstPlayer.name, secondPlayer.name, checkWin);




    return { handleBoard, firstPlayer, secondPlayer, checkWin };
})();

// console.log(game);

// console.log(game.handleBoard);
// console.log(game.firstPlayer);
// console.log(game.secondPlayer);

// console.log(game.checkWin);

// if (game.checkWin === 'x wins!'){
//     console.log('test');
// };
