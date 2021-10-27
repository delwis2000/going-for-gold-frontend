import React from 'react';
import styled from 'styled-components';
import QuestionTile from './QuestionTile';

function CategoryColumn({ category }) {
    return (
        <CategoryColumnContainer className='category-column'>
            <CategoryTitle className='category-title'>
                <span>{category.category.toUpperCase()}</span>
            </CategoryTitle>
            {category.questions.map(question => <QuestionTile key={question.id} question={question} />)}
        </CategoryColumnContainer>
    );
}

export default CategoryColumn;

const CategoryColumnContainer = styled.div`
    margin: 5px;
    &>div{
        width: 150px;
        height: 90px;
        background-color: ${props => props.theme.colors.jeopardyBlue};
        text-align: center;
        word-wrap: normal;
        text-shadow: 2px 3px black;
        border-radius: 3%;
        margin: 10px 0;
    }
`;

const CategoryTitle = styled.div`
    color: white;
    font-size: 24px;
    margin-bottom: 25px;

    display: flex;
    flex-direction:row;
    flex-wrap:wrap; 

    span{
        display: flex;
        justify-content:center;
        align-content:center;
        flex-direction:column;
        flex-grow: 1
    }
`;