import React from 'react';

// class component
class GamePiece extends React.Component {

    // constructor
    constructor(props) {
        super(props);

        // initialize state
        this.state = {
            isTaken: false
        };
    }

    // render method: only required method in a class component
    render() {

        // destructure props
        const { id, value } = this.props;

        // return HTML(JSX)
        return (
            <div id={id}>
                <p>{value}</p>
            </div>
        );
    }
}

export default GamePiece;