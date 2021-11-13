import React, { useEffect, useState } from 'react';
import styled from 'styled-components';

function Leaderboard() {

    const [playerList, setPlayerList] = useState([]);

    useEffect(() => {
        fetch(`${process.env.REACT_APP_API_URL}/players`)
            .then(response => response.json())
            .then(data => setPlayerList(data));
    }, []);
    
    const leaderboardRows = [...playerList]
        .sort((a, b) => {
            [a, b] = [b, a];
            if (a.winnings > b.winnings) return 1;
            if (a.winnings < b.winnings) return -1;
            return 0;
        })
        .map((playerObj, index) => (
            <React.Fragment key={playerObj.id}>
                <span className={index % 2 === 0 ? 'even' : 'odd'}>{playerObj.name}</span>
                <span className={index % 2 === 0 ? 'even' : 'odd'}>{`$${playerObj.winnings}`}</span>
            </React.Fragment>
        ));

    return (
        <LeaderboardContainer>
            <h3>Leaderboard</h3>      
            {leaderboardRows}
        </LeaderboardContainer>
    );
}


export default Leaderboard;

const LeaderboardContainer =styled.div`
    background-color: ${props=> props.theme.colors.jeopardyBlue};
    max-width: 350px;
    font-family: ${props=> props.theme.fonts.sansSerif};
    color: white; 
    font-size: 30px;
    text-shadow: 1px 1px black;
    margin: auto;
    border: 1px solid white;
    border-radius: 3px;
    padding: 5px 0;
    margin-top: 25px;
    margin-bottom: 25px;
    display: grid;
    grid-template-columns: auto auto;
    text-align: center;  

    h3{
        margin: 0;
        text-align: center;
        font-size: 32px;
        text-shadow: 2px 3px black; 
        grid-column: 1 / span 2;
        border-bottom: 1px solid black;
    }

    .even {
        background-color: ${props => props.theme.colors.jeopardyDarkBlue};
    }
`;