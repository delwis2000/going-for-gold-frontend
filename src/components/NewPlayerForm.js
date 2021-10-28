import React, {useState} from 'react';
import { useHistory } from 'react-router-dom';

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
    return (
        <div  >
            <form onSubmit={handleFormSubmit}>
                <input onChange={handleFormChange} type="text" name="name" placeholder="player name" />
                <input onChange={handleFormChange} type="text" name="image" placeholder="Image URL"/>
                
                <input type="submit" value="Add New Player"/>
        
            </form>

            
        </div>
    );
}

export default NewPlayerForm;
// Only need 2 inputs (Name and image link- example check plantsy for image url) use State 
// then fetch request to post it to the database 