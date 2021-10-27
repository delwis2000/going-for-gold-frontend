import React, { useEffect, useState } from 'react';
import { useHistory } from 'react-router-dom';
import { starterGame } from '../data/starterGame';

function NewGameForm() {
    const [playerList, setPlayerList] = useState([]);
    const [alert, setAlert] = useState();
    const [disabled, setDisabled] = useState(false);
    const [formData, setFormData] = useState({
        player1: '',
        player2: '',
        player3: '',
    });

    const history = useHistory();

    useEffect(() => {
        fetch(`${process.env.REACT_APP_API_URL}/players`)
            .then(resp => resp.json())
            .catch(err => console.error('err'))
            .then(data => setPlayerList(data));
    }, []);

    const handleFormChange = (e) => {
        setFormData({...formData, [e.target.name]: e.target.value});
    };

    const handleFormSubmit = (e) => {
        e.preventDefault();
        let newAlert;
        const players = [];
        for (const playerKey in formData) {
            if (formData[playerKey] === '') {
                newAlert = 'Invalid player selection';
                break;
            }
            if (players.includes(formData[playerKey])) {
                newAlert = 'Cannot have duplicate players'
                break;
            }
            players.push(formData[playerKey]);
        }
        setAlert(newAlert);
        if (!newAlert) {
            const newGame = {
                ...starterGame,
                players: Object.keys(formData).map(playerKey => Object.assign({playerId: +formData[playerKey], winnings: 0})),
                boardControl: +formData.player1
            };
            const options = {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(newGame)
            };
            fetch(`${process.env.REACT_APP_API_URL}/games`, options)
                .then(resp => resp.json())
                .then(data => {
                    setDisabled(true);
                    // setTimeout(() => {history.push(`/games/${data.id}`)}, 500);
                    history.push(`/games/${data.id}`);
                });
        }
    };

    const options = playerList.map(player => <option key={player.id} value={player.id}>{player.name}</option>)
    options.unshift(<option key='0' value=''></option>)
    return (
        <div>
            {alert ? <div>{alert}</div> : null}
            <form onSubmit={handleFormSubmit}>
                Player 1: <select name='player1' value={formData.player1} onChange={handleFormChange} disabled={disabled}>{options}</select>
                Player 2: <select name='player2' value={formData.player2} onChange={handleFormChange} disabled={disabled}>{options}</select>
                Player 3: <select name='player3' value={formData.player3} onChange={handleFormChange} disabled={disabled}>{options}</select>
                <input type='submit' disabled={disabled} />
            </form>
        </div>
    );
}

export default NewGameForm;
