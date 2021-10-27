import React, { useEffect, useState } from 'react';
import { useParams, useHistory } from 'react-router-dom';

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
        <div className='question-detail'>
            <span>{questionData.question}</span>
            {guessForm}
            <div><button onClick={() => handlePass(+questionId)}>Pass</button></div>
        </div>
    );
}

export default QuestionDetail;
