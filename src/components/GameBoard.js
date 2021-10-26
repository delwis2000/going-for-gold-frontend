import React, { useEffect, useState } from 'react';
import CategoryColumn from './CategoryColumn';
import CurrentPlayers from './CurrentPlayers';

function GameBoard() {
    const [gameData, setGameData] = useState(null);
    const [answeringPlayer, setAnsweringPlayer] = useState(null);

    useEffect(() => {
        // TODO: fetch game by id based on URL
        fetch(`${process.env.REACT_APP_API_URL}/games`)
            .then(resp => resp.json())
            .then(data => setGameData(data[0]))
    }, []);

    if (!gameData) return <h1>Loading</h1>;

    const activePlayer = true ? gameData.boardControl : answeringPlayer;

    return (
        <div className='game-container'>
            <div className='question-board'>
                {gameData.categories.map(category => <CategoryColumn key={category.id} category={category} />)}
            </div>
            <div>
                <CurrentPlayers players={gameData.players} activePlayer={activePlayer} />
            </div>
        </div>
    );
}

export default GameBoard;
