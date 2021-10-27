import React, { useEffect, useState } from 'react';
import GameListRow from './GameListRow';
import styled from 'styled-components';
import { Link } from 'react-router-dom';

function GameList() {
    const [gameList, setGameList] = useState([]);

    useEffect(() => {
        fetch(`${process.env.REACT_APP_API_URL}/games`)
            .then(resp => resp.json())
            .catch(err => console.error('err'))
            .then(data => setGameList(data));
    }, []);

    return (
        <>
        <Link to='/games/new'>Start a New Game</Link>
            <GameListContainer>
                <h3>Resume a Game</h3>
                <div className='header'>Game ID</div>
                <div className='header'>Player 1</div>
                <div className='header'>Player 2</div>
                <div className='header'>Player 3</div>
                {gameList.map(game => <GameListRow key={game.id} game={game} />)}
            </GameListContainer>
        </>
    );
}

export default GameList;

const GameListContainer = styled.div`
    display: grid;
    grid-template-columns: auto auto auto auto;
    max-width: 600px;
    & h3{
        grid-column: 1 / span 4;
    }
    & .header {
        font-weight: bold;
    }
`;