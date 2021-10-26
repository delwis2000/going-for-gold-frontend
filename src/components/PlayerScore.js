import React, { useEffect, useState } from 'react';

function PlayerScore({ player, activePlayer, handlePlayerClick }) {
    const [playerInfo, setPlayerInfo] = useState();

    useEffect(() => {
        fetch(`${process.env.REACT_APP_API_URL}/players/${player.playerId}`)
            .then(resp => resp.json())
            .then(data => setPlayerInfo(data));
    }, []);

    if (!playerInfo) return <p>Loading</p>

    return (
        <div className={activePlayer === player.playerId ? 'player-score-card active' : 'player-score-card'} onClick={() => handlePlayerClick({id: player.playerId, name: playerInfo.name})}>
            <img src={playerInfo.image} alt={playerInfo.name} />
            {player.winnings < 0 ? <p className='negative'>-${-player.winnings}</p> : <p>${player.winnings}</p>}
            {/* <p className={player.winnings < 0 ? 'negative' : null}>${player.winnings}</p> */}
            <h3>{playerInfo.name}</h3>
        </div>
    );
}

export default PlayerScore;
