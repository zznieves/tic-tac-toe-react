import React from 'react';
import './App.css';
import Header from './Component/Header';
import GameBoard from './Component/GameBoard';
import ScoreBoard from './Component/ScoreBoard';
import { isPieceTaken, evaluateGameState } from './Component/Modules/GameFunctions';

// class component
class App extends React.Component {

  // constructor
  constructor(props) {
    super(props);


    // initialize state
    this.state = {
      gameOver: false,
      playerTurn: 1,
      'Player-1': 0,
      'Player-2': 0,
      Ties: 0
    };

    // bind 'this' keyword to class functions
    this.gamePieceClicked = this.gamePieceClicked.bind(this)
  }

  // event handler for onClick events on GamePiece Components
  gamePieceClicked(id, className) {

    // reference to gamePiece element's text
    const gamePiece = document.getElementById(id).children[0];
    
    // check if piece is already taken
    const taken = isPieceTaken(gamePiece, this.state.playerTurn);

    // if the piece is taken, don't call setState
    if(taken) {
      return;
    }

    // if piece is empty then we marked it, call setState to reflect turn taken
    else {

      this.setState((prevState) => {
        return {playerTurn: prevState.playerTurn+1};
      }, // place code here if using data from udated state
        () => {
          // returns an Array with results
        const gameState = evaluateGameState(className, this.state.playerTurn);

        // call setState method to update the state
        // if we have a tie
        if(gameState.length === 1) {
          alert("It's a tie!");

          this.setState((prevState) => {
            return {Ties: prevState.Ties+1}
          });

          // for loop on GameBoard pieces: clear the gameBoard for next game session
          let gamePieces = document.querySelectorAll(`.${className}`);

          for(let i = 0; i < gamePieces.length; i++) {

            gamePieces[i].innerHTML = '<h2></h2>';
          }

        }
        // if we have a winner
        else if(gameState.length === 2){

          alert(`Congratulations Player-${gameState[1]}!
          You Win!`);

          let key = 'Player-' + gameState[1];

          this.setState((prevState) => {
            // increment score based on previous score
            let value = prevState[key]+1;

            return {[key]: value}
          });

          // for loop on GameBoard pieces: clear the gameBoard for next game session
          let gamePieces = document.querySelectorAll(`.${className}`);

          for(let i = 0; i < gamePieces.length; i++) {

            gamePieces[i].innerHTML = '<h2></h2>';
          }

          
        }
      });

    }

    
    
  }

  // render method: only required method in a class component
  render() {

    // return HTML(JSX)
    return (
      <div id='web-app'>
        <Header id='header' title='Tic-Tac-Toe' />
        <GameBoard id='gameBoard' onClick={this.gamePieceClicked}/>
        <ScoreBoard id='scoreBoard' values={this.state}/>
      </div>
    );
  }
}

export default App;
