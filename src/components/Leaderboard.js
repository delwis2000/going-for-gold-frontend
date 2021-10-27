import React, {useEffect, useState} from 'react';
import GameList from './GameList';
import NewGameForm from './NewGameForm';
import NewPlayerForm from './NewPlayerForm';
import PlayerScore from './PlayerScore';

function Leaderboard() {

    const [playerlist, setPlayerlist] = useState([])

    useEffect(() => {
        fetch(`${process.env.REACT_APP_API_URL}/players`)
            .then(response => response.json())
            .then(data => setPlayerlist(data))
    }, [])
    
    const LeaderBoardRow = playerlist.map(playerObj=> (
     
        <div key = {playerObj.id}>
        {playerObj.name}
        {playerObj.winnings}
        </div>

    ))
    return (
        <div>
     {LeaderBoardRow}
    

        </div>
    );
}

export default Leaderboard;
// Fetch request to get the player on this URL: fetch(`${process.env.REACT_APP_API_URL}/players`) and render all players. Use State
// Sort them by winnings ???
// render them on the page
