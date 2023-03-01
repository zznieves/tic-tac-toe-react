import React from 'react';
import GamePiece from './GamePiece';

// class component
class GameBoard extends React.Component {

    // render method: only required method in a class component
    render() {

        // destructure props
        const { id } = this.props;

        // gamePiece numbers
        const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9];

        // return HTML(JSX)
        return (
            <div id={id}>
                {numbers.map((number, index) => {
                    
                    return <GamePiece key={index} id={`gamePiece${number}`} value={number} />;
                })}
            </div>
        );
    }
}

export default GameBoard;