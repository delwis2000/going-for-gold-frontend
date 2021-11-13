import React from 'react';
import styled from 'styled-components';

function About() {
    return (
        <AboutSection>
            Welcome to Going For Gold! This is a Jeapordy-like game where one person will act as the host and interact with the app. The host can share their screen with the players of the game and play through a game! Pick a question on the board, and the first player to guess correctly wins the money and gets control of the board. Any incorrect answers will result in losing money. At the end of the game, the player with the most money gets their winnings added to their running total!
        </AboutSection>
    );
}

export default About;

const AboutSection = styled.div`
    padding: 10px;
    max-width: 600px;
    background-color: ${props => props.theme.colors.jeopardyBlue};
    border: 1px solid white;
    border-radius: 3px;
    font-family: ${props => props.theme.fonts.sansSerif};
    font-size: large;
    text-shadow: 1px 1px black;
    color: white;
    margin: auto;
    margin-top: 20px;
    text-align: justify;
`;