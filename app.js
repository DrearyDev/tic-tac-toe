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

const game = () => {
    const gameStatus = document.querySelector('.game-status > p');
    const resetButton = document.querySelector('.game-status > button');

    const firstPlayerText = document.querySelector('.first-player');
    const secondPlayerText = document.querySelector('.second-player');
    firstPlayerText.setAttribute('contentEditable', true);
    secondPlayerText.setAttribute('contentEditable', true);

    let firstPlayer = null;
    let secondPlayer = null;
    let activePlayer = null;

    handleBoard.createBoard();

    const handleNameInput = (e) => {
        if (e.target.textContent.length > 10) {//max lenght of names
            e.target.textContent = e.target.textContent.slice(0, -1);
        };
    };
    firstPlayerText.addEventListener('input', handleNameInput);
    secondPlayerText.addEventListener('input', handleNameInput);

    const handleClicks = (e) => {
        //if board array is empty
        if (handleBoard.getBoardArray().join('') === '') {
            firstPlayerText.setAttribute('contentEditable', false);
            secondPlayerText.setAttribute('contentEditable', false);
            firstPlayer = createPlayer(firstPlayerText.textContent, 'x');
            secondPlayer = createPlayer(secondPlayerText.textContent, 'o');
            activePlayer = firstPlayer;
        };

        if (e.target.innerText === '') {
            handleBoard.updateBoard(e.target.attributes[0].value, activePlayer.symbol);
            if (checkWin(activePlayer.symbol)) {
                gameStatus.textContent = `${activePlayer.name} Wins!!!`;
                handleBoard.board.removeEventListener('click', handleClicks);
                resetButton.style.display = 'block';
            } else {
                switchActivePlayer();
            };
        };
    };
    handleBoard.board.addEventListener('click', handleClicks)

    const switchActivePlayer = () => {
        activePlayer = activePlayer === firstPlayer ? secondPlayer : firstPlayer;
        gameStatus.textContent = `${activePlayer.name}'s Turn!`;
    };

    const resetGame = () => {
        handleBoard.resetBoardArray();
        handleBoard.removeBoard();
        game();
        gameStatus.textContent = "Change player Names and start when you're ready!"
        resetButton.style.display = 'none';
    };
    resetButton.addEventListener('click', resetGame);

    const checkWin = (symbol) => {
        let horizontalArray = [];
        let verticalArray = [];
        let diagonalArray = [];

        let symbolCount = 0;

        //CHECKING HORIZONTALS

        for (let i = 0; i < 9; i+=3) {
            horizontalArray = [
                handleBoard.getBoardArray()[i],
                handleBoard.getBoardArray()[i + 1],
                handleBoard.getBoardArray()[i + 2]
            ];

            for (const ele of horizontalArray) {
                if (ele === symbol) {
                    symbolCount++;
                    if (symbolCount === 3) {
                        return true;
                    };
                } else {
                    symbolCount = 0;
                };
            };

            symbolCount = 0;
        };

        //CHECKING VERTICALS
        for (let i = 0; i < 3; i++) {
            verticalArray = [
                handleBoard.getBoardArray()[i],
                handleBoard.getBoardArray()[i + 3],
                handleBoard.getBoardArray()[i + 6]
            ];

            symbolCount = 0;
            for (const ele of verticalArray) {
                if (ele === symbol) {
                    symbolCount++;
                    if (symbolCount === 3){
                        return true;
                    };
                } else {
                    symbolCount = 0;
                };
            };

            symbolCount = 0;
        };

        //CHECKING DIAGONALS
        diagonalArray.push(handleBoard.getBoardArray()[0]);
        diagonalArray.push(handleBoard.getBoardArray()[4]);
        diagonalArray.push(handleBoard.getBoardArray()[8]);
        diagonalArray.push(handleBoard.getBoardArray()[2]);
        diagonalArray.push(handleBoard.getBoardArray()[4]);
        diagonalArray.push(handleBoard.getBoardArray()[6]);

        symbolCount = 0;
        for (const ele of diagonalArray) {
            if (ele === symbol) {
                symbolCount++;
                if (symbolCount === 3){
                    return true;
                };
            } else {
                symbolCount = 0;
            };

            symbolCount = 0;
        };

        return false;
    };
};
game();




