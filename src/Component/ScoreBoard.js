import React from 'react';
import Score from './Score';

// class component
class ScoreBoard extends React.Component {

    // render method: only required method in a class component
    render() {

        // destructure props
        const { id, values } = this.props;


        // get keys from passed-in object and filter out unneeded keys
        const keys = Object.keys(values);
        const filteredKeys = keys.filter((key) => ((key !== 'gameOver') && (key !== 'playerTurn')));


        // return HTML(JSX)
        return (
            <div id={id}>
                {filteredKeys.map((key, index) => {
                    return <Score 
                            key={index} 
                            id={key} 
                            className='score'
                            title={key}
                            score={values[key]}
                            />
                })}
            </div>
        );
    }
}

export default ScoreBoard;