import React from 'react';
import './App.css';
import Header from './Component/Header';
import GameBoard from './Component/GameBoard';
import ScoreBoard from './Component/ScoreBoard';

// class component
class App extends React.Component {

  // constructor
  constructor(props) {
    super(props);

    // initialize state
    this.state = {
      gameOver: false
    };
  }

  // render method: only required method in a class component
  render() {

    // return HTML(JSX)
    return (
      <div id='web-app'>
        <Header id='header' title='Tic-Tac-Toe' />
        <GameBoard id='gameBoard' />
        <ScoreBoard id='scoreBoard' />
      </div>
    );
  }
}

export default App;
