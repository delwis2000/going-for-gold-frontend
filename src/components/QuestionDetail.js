import React, { useEffect, useState } from 'react';
import { useParams, useHistory } from 'react-router-dom';
import styled from 'styled-components';

function QuestionDetail({ gameData, handlePass, guess, handleGuessChange, handleGuessSubmit, answeringPlayer }) {
    const [questionData, setQuestionData] = useState()
    const { gameId, questionId } = useParams();

    const history = useHistory();

    useEffect(() => {
        // gameData.categories.forEach(category => {
        console.log(questionId);
        for (let category of gameData.categories) {
            console.log(category);
            const question = category.questions.find(question => question.id === +questionId)
            if (question) {
                setQuestionData(question);
                break;
            }
        }
    }, [questionId]);

    if (!questionData) return <h1>Loading</h1>;

    if (questionData.completed === true) history.push(`/games/${gameId}`)

    const guessForm = answeringPlayer.name ? 
        <form onSubmit={(e) => handleGuessSubmit(e, +questionId)} autoComplete='off'>
            <label htmlFor='guess-input'>{answeringPlayer.name}: </label>
            <input type='text' id='guess-input' onChange={handleGuessChange} placeholder='Answer' value={guess} />
            <input type='submit' />
        </form> : <div>Click on a player</div>;

    return (
        <QuestionDetailContainer className='question-detail'>
            <span>{questionData.question}</span>
            {guessForm}
            <div><button onClick={() => handlePass(+questionId)}>Pass</button></div>
        </QuestionDetailContainer>
    );
}

export default QuestionDetail;

const QuestionDetailContainer = styled.div`
    background-color: ${props => props.theme.colors.jeopardyBlue};
    color: white;
    font-family: ${props => props.theme.fonts.serif};
    margin: 15px;
    box-sizing: border-box;
    width: 900px;
    height: 600px;
    font-size: 46px;
    text-shadow: 3px 4px black;
    display: flex;
    flex-direction: column;
    text-align: center;
    padding: 50px;
    border-radius: 1%;

    span{
        align-content: center;
        justify-content: center;
        flex-direction: column;
        flex-grow: 1;
    }

    input[type='text']{
        padding: 5px;
        margin: 0 20px;
        border-radius: 5px;

        background-color: ${props => props.theme.colors.jeopardyDarkBlue};

        color: white;
        font-family: ${props => props.theme.fonts.sansSerif};
        font-size: 18px;
        text-shadow: 1px 1px black;
    }

    button, input[type='submit']{
        width: 100px;
        /* margin-top: 25px; */
        padding: 10px;
        border: 3px solid ${props => props.theme.colors.jeopardyYellow};
        border-radius: 10px;

        background-color: ${props => props.theme.colors.jeopardyBlue};

        font-family: ${props => props.theme.fonts.sansSerif};
        color: white;
        /* font-weight: bold; */
        font-size: large;
        text-shadow: 1px 2px black;

        cursor: pointer;
        transition: background-color 0.25s;

        &:hover {
            background-color: ${props => props.theme.colors.jeopardyDarkBlue};
        }
    }

    button {
        margin-top: 40px;
    }

    form {
        display: flex;
        align-items: center;
        justify-content: center;
    }
`;