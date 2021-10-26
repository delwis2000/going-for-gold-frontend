import React from 'react'
import PlayerScore from './PlayerScore';

function CurrentPlayers({ players, activePlayer, handlePlayerClick }) {
    return (
        <div className='score-board'>
            {players.map(player => <PlayerScore key={player.playerId} player={player} activePlayer={activePlayer} handlePlayerClick={handlePlayerClick} />)}
        </div>
    );
}

export default CurrentPlayers;
