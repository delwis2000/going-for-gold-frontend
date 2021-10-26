import React from 'react';

function QuestionTile({ question }) {
    return (
        <div className='question-tile'>
            {question.completed ? null : `$${question.value}`}
        </div>
    );
}

export default QuestionTile;
