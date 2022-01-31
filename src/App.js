import logo from './logo.svg';
import './App.css';
import Coin from './coin/Coin'
import FlipButton from './FlipButton/FlipButton'
function App() {
  return (
    <div className="App">
      <header className="App-header">

<Coin />

        <p>
         Toss A Coin
        </p> <FlipButton />
        <a
          className="App-link"
          href="https://pukks.online"
          target="_blank"
          rel="noopener noreferrer"
        >
          pukks.online
        </a>
      </header>
    </div>
  );
}

export default App;
