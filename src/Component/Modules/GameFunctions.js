/**
 *  Module for game functionality
 */

function isPieceTaken(gamePiece, playerTurn) {

    // if the gamePiece is not empty, notify the player
    if(gamePiece.innerText) {
        alert('GamePiece is already taken. Try again');
        return true;
    }
    // if the gamePiece is empty, claim it
    gamePiece.innerText = (playerTurn % 2 !== 0) ? ('X') : ('O');
    return false;
    
}

// extract gameBoard values
function getGameBoardValues(className) {

    // get all gamePieces' current values
    const gameBoard = document.getElementsByClassName(className);

    const gamePieces = Object.values(gameBoard);

    return gamePieces.map((element) => {
        return element.innerText;
    });
}

// check if we have a winner or a tie to end the game
function winnerOrTie(values, playerTurn) {

    /**
     * reasons to return false
     *  1. we have less than 3 non-empty values in the GameBoard(Array)
     */
    if(playerTurn < 4) {
        return false;
    }
    /**
     * check for 3 of the same values in a row (X or O)
     *  8 ways to win
     */
    // Option #1: check indexes 0, 1, and 2
    if((values[0]) && (values[0] === values[1]) && (values[1] === values[2])) {

        // we have a winner. Return true with the players' info
        return [true, ((playerTurn%2===0) ? (1) : (2))];
        
    }
    // Option #2: check indexes 3, 4, and 5
    else if((values[3]) && (values[3] === values[4]) && (values[4] === values[5])) {

        // we have a winner. Return true with the players' info
        return [true, ((playerTurn%2===0) ? (1) : (2))];
    }
    // Option #3: check indexes 6, 7, and 8
    else if((values[6]) && (values[6] === values[7]) && (values[7] === values[8])) {

        // we have a winner. Return true with the players' info
        return [true, ((playerTurn%2===0) ? (1) : (2))];
    }
    // Option #4: check indexes 0, 3, and 6
    else if((values[0]) && (values[0] === values[3]) && (values[3] === values[6])) {

        // we have a winner. Return true with the players' info
        return [true, ((playerTurn%2===0) ? (1) : (2))];
    }
    // Option #5: check indexes 1, 4, and 7
    else if((values[1]) && (values[1] === values[4]) && (values[4] === values[7])) {

        // we have a winner. Return true with the players' info
        return [true, ((playerTurn%2===0) ? (1) : (2))];
    }
    // Option #6: check indexes 2, 5, and 8
    else if((values[2]) && (values[2] === values[5]) && (values[5] === values[8])) {

        // we have a winner. Return true with the players' info
        return [true, ((playerTurn%2===0) ? (1) : (2))];
    }
    // Option #7: check indexes 0, 4, 8
    else if((values[0]) && (values[0] === values[4]) && (values[4] === values[8])) {

        // we have a winner. Return true with the players' info
        return [true, ((playerTurn%2===0) ? (1) : (2))];
    }
    // Option #8: check indexes 2, 4, 6
    else if((values[2]) && (values[2] === values[4]) && (values[4] === values[6])) {

        // we have a winner. Return true with the players' info
        return [true, ((playerTurn%2===0) ? (1) : (2))];
    }
    /**
     * if we've gotten to this point, check if the Array is full
     *  - if the Array is full (no empty strings) then we can't mark anymore gamePieces.
     *  - the result will be a tie
     */
    else if( !values.includes('')) {

        return ['tie'];
    }
    // if we don't have a result yet, return false
    else {
        return false;
    }
}

/**
 *  Check the game state
 *  - do we have a winner?
 *  - do we have a tie?
 */
function evaluateGameState(className, playerTurn) {

    // get current GamePiece values (empty, X, or O)
    const gameBoardValues = getGameBoardValues(className);
    
    // check if we have a winner to a tie
    let a = winnerOrTie(gameBoardValues, playerTurn);

    // return the result to the App.js file
    return a;

}



// export functions to be used in another file
export { isPieceTaken, evaluateGameState };