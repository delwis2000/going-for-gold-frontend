import { Route, Switch } from 'react-router-dom';
import styled from 'styled-components';
import './App.css';
import About from './About';
import GameBoard from './GameBoard';
import GameList from './GameList';
import NewGameForm from './NewGameForm';
import Leaderboard from './Leaderboard';
import NavBar from './NavBar';
import NewPlayerForm from './NewPlayerForm';

function App() {

    return (
        <AppContainer>
            <NavBar />
            <Switch>
                <Route path= '/players/new'>
                    <NewPlayerForm />
                </Route>

                <Route path='/games/new'>
                    <NewGameForm />
                </Route>

                <Route path='/games/:gameId'>
                    <GameBoard />
                </Route>

                <Route path='/games'>
                    <GameList />
                </Route>

                <Route path='/'>
                    <About />
                    <Leaderboard />
                </Route>
            </Switch>
        </AppContainer>
  );
}

export default App;

const AppContainer = styled.div`
  padding-bottom: 35px;
`;