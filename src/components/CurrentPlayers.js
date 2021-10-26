import React from 'react'
import PlayerScore from './PlayerScore';

function CurrentPlayers({ players, activePlayer }) {
    console.log(players)
    return (
        <div className='score-board'>
            {players.map(player => <PlayerScore player={player} activePlayer={activePlayer} />)}
        </div>
    );
}

export default CurrentPlayers;
