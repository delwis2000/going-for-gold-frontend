import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom';

function GameListRow({ game, rowClass }) {
    const [players, setPlayers] = useState();

    useEffect(() => {
        fetch(`${process.env.REACT_APP_API_URL}/players`)
            .then(resp => resp.json())
            .then(data => setPlayers(data));
    }, []);

    if (!players) return <div>Loading</div>

    return (
        // <Link to={`/games/${game.id}`}>
        <>
            <Link to={`/games/${game.id}`} className={rowClass}>
                Game {game.id}
            </Link>
            {game.players.map(includedPlayer => (
                <div key={includedPlayer.playerId} className={rowClass}>
                    {players.find(player => player.id === includedPlayer.playerId).name} 
                    {/* (${includedPlayer.winnings}) */}
                    {includedPlayer.winnings < 0 ? ` (-$${-includedPlayer.winnings})` : ` ($${includedPlayer.winnings})`}
                </div>
            ))}
        </>
        // </Link>
    )
}

export default GameListRow
