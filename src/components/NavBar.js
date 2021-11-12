import React from 'react';
import { Link } from 'react-router-dom'
import styled from 'styled-components'

function NavBar() {
    return (
        <NavContainer>
            <Link to= "/"> 
                Going For Gold!
            </Link>

            <Link to= "/games">
                Games
            </Link>

            <Link to= "/players/new">
                Add Player
            </Link>
        </NavContainer>
    );
}

export default NavBar;

const NavContainer = styled.div`
    background-color: ${props=> props.theme.colors.jeopardyBlue};
    padding: 10px;
    border-bottom: 2px solid white;

    a{
        color:${props=> props.theme.colors.jeopardyYellow};
        margin: 0 25px; 
        text-decoration: none; 
        text-shadow: 1px 1px black;
        font-family: ${props=> props.theme.fonts.sansSerif};
        font-size: 24px;
        padding: 10px;
        transition: background-color 0.25s;

        &:hover{
            background-color: ${props=> props.theme.colors.jeopardyDarkBlue};    
        }
    }
`;