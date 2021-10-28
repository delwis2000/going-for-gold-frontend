import React, {useEffect, useState} from 'react';
import styled from 'styled-components';

function Leaderboard() {

    const [playerList, setPlayerList] = useState([])

    useEffect(() => {
        fetch(`${process.env.REACT_APP_API_URL}/players`)
            .then(response => response.json())
            .then(data => setPlayerList(data))
    }, [])
    
    const LeaderBoardRow = [...playerList]
        .sort((a, b) => {
        [a,b]=[b,a]
            if (a.winnings > b.winnings) return 1;
            if (a.winnings < b.winnings) return -1;
            return 0;
        })

    .map(playerObj=> (
     
        <div key = {playerObj.id}>
        {playerObj.name}
        {" $"}
        {playerObj.winnings}
        </div>

    ))
    return (
        <LeaderboardContainer>
      <h3> LEADERBOARD</h3>      
     {LeaderBoardRow}
    

        </LeaderboardContainer>
    );
}


export default Leaderboard;
// Fetch request to get the player on this URL: fetch(`${process.env.REACT_APP_API_URL}/players`) and render all players. Use State
// Sort them by winnings ???
// render them on the page
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
padding: 5px;
margin-top: 25px;
margin-bottom: 25px;
h3{
text-align: center;  
margin: 0;
text-align: center;
font-size: 32px;
text-shadow: 2px 3px black; 
}




`