import React from 'react';
import {Link} from 'react-router-dom'

function NavBar() {

    return (
    <div>
     <Link to= "/"> 
     Home
     </Link>

     <Link to= "/games">
     Games
     </Link>

     <Link to= "/players/new">
     Newplayerform
     </Link>
    </div>
    );
}

export default NavBar;

// the lecture for the routing will help me. the path for the nav should match what we have on the App (3 links: home/games/newplayerform)
