import { Route, Switch } from 'react-router';
import './App.css';
import GameBoard from './GameBoard';

function App() {
  return (
    <div>
      <Switch>
        {/* vvv Include routes for player pages here vvv */}



        {/* vvv Include routes for game pages here vvv */}
        <Route path='/games'>
          <GameBoard />
        </Route>

        <Route path='/'>
          {/* Insert home page component(s) here */}
        </Route>
      </Switch>
    </div>
  );
}

export default App;
