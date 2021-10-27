import { Route, Switch } from 'react-router-dom';
import './App.css';
import GameBoard from './GameBoard';
import GameList from './GameList';
import NewGameForm from './NewGameForm';

function App() {
  return (
    <div>
      <Switch>
        {/* vvv Include routes for player pages here vvv */}



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
          {/* Insert home page component(s) here */}
        </Route>
      </Switch>
    </div>
  );
}

export default App;
