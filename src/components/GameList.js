import React, { useEffect, useState } from 'react';
import GameListRow from './GameListRow';
import styled from 'styled-components';
import { useHistory } from 'react-router-dom';

function GameList() {
    const [gameList, setGameList] = useState([]);

    const history = useHistory();

    useEffect(() => {
        fetch(`${process.env.REACT_APP_API_URL}/games`)
            .then(resp => resp.json())
            .catch(err => console.error('err'))
            .then(data => setGameList(data));
    }, []);

    const gameListRows = gameList.length > 0 ? 
        gameList.map((game, index) => <GameListRow key={game.id} game={game} rowClass={index % 2 === 0 ? 'even' : 'odd'} />)
        : <span>No open games!</span>

    return (
        <>
            <GameListContainer>
                <h3>Resume a Game</h3>
                <div className='header'>Game ID</div>
                <div className='header'>Player 1</div>
                <div className='header'>Player 2</div>
                <div className='header'>Player 3</div>
                {gameListRows}
                {/* {gameList.map((game, index) => <GameListRow key={game.id} game={game} rowClass={index % 2 === 0 ? 'even' : 'odd'} />)} */}
            </GameListContainer>
            <NewGameLink onClick={() => history.push('/games/new')}>Start a New Game</NewGameLink>
        </>
    );
}

export default GameList;

const NewGameLink = styled.button`
    cursor: pointer;
    border: 3px solid ${props => props.theme.colors.jeopardyYellow};
    border-radius: 10px;
    color: ${props => props.theme.colors.jeopardyYellow};
    text-shadow: 1px 1px black;
    background-color: ${props => props.theme.colors.jeopardyBlue};
    padding: 10px;
    font-weight: bold;
    font-size: large;
    display: block;
    margin: auto;
    margin-top: 20px;
    transition: background-color 0.25s;
    &:hover {
        background-color: ${props => props.theme.colors.jeopardyDarkBlue};
    }
`;

const GameListContainer = styled.div`
    display: grid;
    grid-template-columns: auto auto auto auto;
    max-width: 600px;
    font-family: ${props => props.theme.fonts.sansSerif};
    font-size: large;
    border: 1px solid white;
    border-radius: 3px;
    margin: auto;
    margin-top: 25px;
    padding: 5px 0;
    background-color: ${props => props.theme.colors.jeopardyBlue};
    text-align: center;
    text-shadow: 1px 1px black;
    color: white;
    a {
        color: ${props => props.theme.colors.jeopardyYellow};
        text-decoration: none;
    }
    h3{
        grid-column: 1 / span 4;
        margin: 0;
        text-align: center;
        font-size: 32px;
        text-shadow: 2px 3px black;
        /* text-decoration: underline; */
    }
    &>span{
        grid-column: 1 / span 4;
    }
    .header {
        font-weight: bold;
        border-bottom: 1px solid black;
        text-shadow: 2px 3px black;
        padding: 10px 0;
    }
    .even {
        background-color: ${props => props.theme.colors.jeopardyDarkBlue};
    }

    .even, .odd {
        padding: 5px 0;
    }
`;