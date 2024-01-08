//import "./Home.css";
import { Link } from "react-router-dom";

function Home() {
  return (
    <div id="wrapper">
      <h1 id="welcome">Welcome to Tic Tac Toe!</h1>
      <p>Select a game mode:</p>
      <ul>
        <li >
          <Link to="Single" id="si">Single player</Link>
        </li>
        <li>
          <Link to="Multi" id="mu">Multiplayer</Link>
        </li>
      </ul>
      <footer id="Home">Created by Bryson Sutton</footer>
    </div>
    
  );
}

export default Home;
