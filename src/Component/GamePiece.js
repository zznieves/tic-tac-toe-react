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
        const { id, className, onClick } = this.props;

        // return HTML(JSX)
        return (
            <div id={id} className={className} onClick={() => {onClick(id, className)}}>
                <h2></h2>
            </div>
        );
    }
}

export default GamePiece;