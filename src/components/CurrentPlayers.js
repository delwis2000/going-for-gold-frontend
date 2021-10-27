import React from 'react'
import styled from 'styled-components';
import PlayerScore from './PlayerScore';

function CurrentPlayers({ players, activePlayer, handlePlayerClick }) {
    return (
        <ScoreBoard className='score-board'>
            {players.map(player => <PlayerScore key={player.playerId} player={player} activePlayer={activePlayer} handlePlayerClick={handlePlayerClick} />)}
        </ScoreBoard>
    );
}

export default CurrentPlayers;

const ScoreBoard = styled.div`
    display: flex;
    justify-content: center;
`;
