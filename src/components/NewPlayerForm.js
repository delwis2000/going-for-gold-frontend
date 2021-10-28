import React, {useState} from 'react';
import { useHistory } from 'react-router-dom';
import styled from 'styled-components'

function NewPlayerForm() {

    const [newPlayerForm, setPlayerForm] = useState(
        {
            
            "name": "",
            "image": "",
            "winnings": 0
        }

    )
    const history = useHistory()

    function handleFormChange(e){
        setPlayerForm({...newPlayerForm, [e.target.name] : e.target.value})
    }
    // console.log(newPlayerForm)

    function handleFormSubmit(e){
        e.preventDefault()

        if (newPlayerForm.name !== "") {
            fetch(`${process.env.REACT_APP_API_URL}/players`, {
                method: "POST",
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify(newPlayerForm)
                })
                .then(response => response.json())
                .then(data => history.push("/"))
            }   
        }
        

    
    
    return (
        <FormContainer  >
            <h3>Add A Player</h3>
            <form onSubmit={handleFormSubmit}>
                <input onChange={handleFormChange} type="text" name="name" placeholder="player name" />
                <input onChange={handleFormChange} type="text" name="image" placeholder="Image URL"/>
                
                <input type="submit" value="Add New Player"/>
        
            </form>

            
        </FormContainer>
    );
}

export default NewPlayerForm;
// Only need 2 inputs (Name and image link- example check plantsy for image url) use State 
// then fetch request to post it to the database 

const FormContainer = styled.div`
background-color: ${props=> props.theme.colors.jeopardyBlue};
max-width: 600px;
font-family: ${props=> props.theme.fonts.sansSerif};
color: white; 
font-size: large;
text-shadow: 1px 1px black;
margin: auto;
border: 1px solid white;
border-radius: 3px;
padding: 5px;
margin-top: 25px;
text-align: center;

input{
    margin-left: 10px;
    padding: 0 5px;
    border-radius: 5px;
    background-color: ${props => props.theme.colors.jeopardyDarkBlue};
    color: white;
    font-family: ${props => props.theme.fonts.sansSerif};
    font-size: 18px;
    text-shadow: 1px 1px black;
}

input[type=submit]{
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

}
    h3{
        grid-column: 1 / span 4;
        margin-top: 0;
        text-align: center;
        font-size: 32px;
        text-shadow: 2px 3px black;
        
    }



`