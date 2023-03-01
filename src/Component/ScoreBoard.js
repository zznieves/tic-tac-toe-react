import React from 'react';
import Score from './Score';

// class component
class ScoreBoard extends React.Component {

    // constructor
    constructor(props) {
        super(props);

        // initialize state
        this.state = {

            'Player-1': 0,
            'Player-2': 0,
            Ties: 0
        };
    }

    // render method: only required method in a class component
    render() {

        // destructure props
        const { id } = this.props;

        // get keys from Component state
        const keys = Object.keys(this.state);

        // return HTML(JSX)
        return (
            <div id={id}>
                {keys.map((key, index) => {

                    return <Score key={index}
                        id={key}
                        className='score'
                        title={key} 
                        score={this.state[key]} />;
                })}
            </div>
        );
    }
}

export default ScoreBoard;