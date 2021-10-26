import React from 'react';
import { useParams, Link } from 'react-router-dom';

function QuestionTile({ question }) {
    const { gameId } = useParams();

    return (
        <div className='question-tile'>
            {question.completed ? null : <Link to={`/games/${gameId}/questions/${question.id}`}>{`$${question.value}`}</Link>}
        </div>
    );
}

export default QuestionTile;
