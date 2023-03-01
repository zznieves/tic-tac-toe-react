import React from 'react';

// functional component: arrow-function syntax
function Score(props) {

    // destructure props
    const { title, score, id } = props;

    // return HTML(JSX)
    return (
        <div id={id}>
            <h4>{title}</h4>
            <p>{score}</p>
        </div>
    );
}

export default Score;