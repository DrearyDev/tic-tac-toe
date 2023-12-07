'use strict';

function createPlayer(name, symbol){
    return { name, symbol }
};

const handleBoard = (() => {
    const board = document.querySelector('.board');
    let boardArray = ['','','','','','','','',''];

    const getBoardArray = () => {
        return boardArray;
    };

    const resetBoardArray = () => {
        boardArray = ['','','','','','','','',''];
    };

    const logBoard = () => {
        console.log(boardArray);
    };

    const createBoard = () => {
        for (let i = 0; i < boardArray.length; i++) {
            let div = document.createElement('div');
            div.setAttribute('data-index', `${i}`);
            div.innerText = boardArray[i];
            board.appendChild(div)
        };
    };

    const updateBoard = (index, symbol) => {
        if (boardArray[index] === ''){
            let boardChildren = document.querySelectorAll('.board > div');
            boardArray[index] = symbol;
            boardChildren[index].innerText = symbol;
            if (symbol === 'x') {
                boardChildren[index].classList.add('x');
            } else if (symbol === 'o') {
                boardChildren[index].classList.add('o');
            };
            return 0;
        } else {
            return 1;
        };
    };

    const removeBoard = () => {
        let boardChildren = document.querySelectorAll('.board > div');
        let boardChildrenArray = [...boardChildren];

        boardChildrenArray.forEach(child => {
            child.remove();
        });
    };

    return { board, getBoardArray, resetBoardArray, createBoard, updateBoard, removeBoard, logBoard };
})();



const checkWin = (player) => {

};

function resetGame() {

};

const switchPlayerTurn = () => {
    activePlayer = activePlayer === firstPlayer ? secondPlayer : firstPlayer;
};


function game(){

};
game();




