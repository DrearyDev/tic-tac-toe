'use strict';



const game = (function () {

    const handleBoard = (function () {
        let board = [
            'x','o','x',
            'o','o','o',
            'x','','x',
        ];

        return {board};
    })();


    const firstPlayer = (function () {
        let name = 'player1';

        return {name};
    })();


    const secondPlayer = (function () {
        let name = 'player2';

        return {name};
    })();


    return { handleBoard, firstPlayer, secondPlayer, checkWin };
})();

console.log(game);

console.log(game.handleBoard);
console.log(game.firstPlayer);
console.log(game.secondPlayer);








