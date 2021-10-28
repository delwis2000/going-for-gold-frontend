import React, { useEffect, useState } from 'react';
import { useHistory } from 'react-router-dom';
import styled from 'styled-components';
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

    const options = [...playerList]
        .sort((a, b) => {
            if (a.name > b.name) return 1;
            if (a.name < b.name) return -1;
            return 0;
        })
        .map(player => <option key={player.id} value={player.id}>{player.name}</option>);
    options.unshift(<option key='0' value=''></option>);

    const inputs = [1, 2, 3].map(id => (
        <div key={id}>
            Player {id}: 
            <PlayerSelector name={`player${id}`} value={formData[`player${id}`]} onChange={handleFormChange} disabled={disabled}>{options}</PlayerSelector>
        </div>
    ));

    return (
        <FormContainer>
            <GameForm onSubmit={handleFormSubmit}>
                <FormBody>
                    <FormTitle>Start New Game</FormTitle>
                    <span>Choose three players to start a new game:</span>
                    {alert ? <div className='alert'>{alert}</div> : null}
                    {inputs}
                </FormBody>
                <SubmitButton type='submit' disabled={disabled} />
            </GameForm>
        </FormContainer>
    );
}

export default NewGameForm;

const FormContainer = styled.div`
    /* margin: auto; */
`;

const GameForm = styled.form`
    margin: auto;
    margin-top: 20px;
    width: fit-content;
    font-family: ${props => props.theme.fonts.sansSerif};
    color: white;
    text-shadow: 1px 1px black;
    text-align: center;
    font-size: large;
`;

const FormBody = styled.div`
    background-color: ${props => props.theme.colors.jeopardyBlue};
    padding: 5px;
    border: 1px solid white;
    border-radius: 3px;
    .alert {
        color: ${props => props.theme.colors.jeopardyYellow};
    }
    div {
        margin: 10px 0;
    }
`;

const FormTitle = styled.h3`
    font-size: 32px;
    text-shadow: 2px 3px black;
    margin: 0;
`;

const PlayerSelector = styled.select`
    margin-left: 10px;
    padding: 0 5px;
    border-radius: 5px;
    background-color: ${props => props.theme.colors.jeopardyDarkBlue};
    color: white;
    font-family: ${props => props.theme.fonts.sansSerif};
    font-size: 18px;
    text-shadow: 1px 1px black;
    
`;

const SubmitButton = styled.input`
    cursor: pointer;
    border: 3px solid ${props => props.theme.colors.jeopardyYellow};
    border-radius: 10px;
    color: ${props => props.theme.colors.jeopardyYellow};
    text-shadow: 1px 1px black;
    background-color: ${props => props.theme.colors.jeopardyBlue};
    padding: 10px;
    font-weight: bold;
    font-size: large;
    display: block;
    margin: auto;
    margin-top: 20px;
    transition: background-color 0.25s;
    &:hover {
        background-color: ${props => props.theme.colors.jeopardyDarkBlue};
    }
`;