import React from 'react';
import { useParams, Link } from 'react-router-dom';
import styled from 'styled-components';

function QuestionTile({ question }) {
    const { gameId } = useParams();

    return (
        <QuestionTileContainer className='question-tile'>
            {question.completed ? null : <Link to={`/games/${gameId}/questions/${question.id}`}>{`$${question.value}`}</Link>}
        </QuestionTileContainer>
    );
}

export default QuestionTile;

const QuestionTileContainer = styled.div`
    a{
        color: ${props => props.theme.colors.jeopardyYellow};
        font-size: 42px;
        line-height: 100px;
        text-decoration: none;
    }
`;