import React, { useEffect, useState } from 'react';
import styled from 'styled-components';

function PlayerScore({ player, activePlayer, handlePlayerClick }) {
    const [playerInfo, setPlayerInfo] = useState();

    useEffect(() => {
        fetch(`${process.env.REACT_APP_API_URL}/players/${player.playerId}`)
            .then(resp => resp.json())
            .then(data => setPlayerInfo(data));
    }, []);

    if (!playerInfo) return <p>Loading</p>

    return (
        <ScoreCard className={activePlayer === player.playerId ? 'player-score-card active' : 'player-score-card'} onClick={() => handlePlayerClick({id: player.playerId, name: playerInfo.name})}>
            <img src={playerInfo.image} alt={playerInfo.name} />
            {player.winnings < 0 ? <p className='negative'>-${-player.winnings}</p> : <p>${player.winnings}</p>}
            {/* <p className={player.winnings < 0 ? 'negative' : null}>${player.winnings}</p> */}
            <h3>{playerInfo.name}</h3>
        </ScoreCard>
    );
}

export default PlayerScore;

const ScoreCard = styled.div`
    margin: 0 50px;
    padding: 10px;
    border: 1px solid black;
    text-align: center;
    background-color: ${props => props.theme.colors.jeopardyBlue};
    width: 150px;
    border-radius: 3%;
    cursor: pointer;

    &.active{
        box-shadow: 0 0 10px 3px white;
    }

    img{
        border-radius: 20px;
        object-fit: cover;
        width: 100px;
        height: 100px;
    }

    p{
        font-family: ${props => props.theme.fonts.sansSerif};
        font-size: 30px;
        color: white;
        text-shadow: 1px 2px black;
        margin: 10px;
        &.negative{
            color: red;
        }
    }

    h3{
        font-family: ${props => props.theme.fonts.handwriting};
        font-size: 24px;
        color: white;
        text-shadow: 1px 2px black;
        margin: 0;
    }
`;