import { Route, Switch } from 'react-router-dom';
import './App.css';
import GameBoard from './GameBoard';
import GameList from './GameList';
import NewGameForm from './NewGameForm';
import Leaderboard from './Leaderboard';
import NavBar from './NavBar';

function App() {

  return (
    <div>
     {/* add a Nav Bar here */}
      < NavBar />
      <Switch>
        {/* vvv Include routes for player pages here vvv. the path will be path= '/players/new */}



        {/* vvv Include routes for game pages here vvv */}
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
          {/* Insert home page component(s) here   use LeaderBoard.js here */}
          <Leaderboard/>
        </Route>
      </Switch>
    </div>
  );
}

export default App;
