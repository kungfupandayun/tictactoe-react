import './App.css';
import Game from './Game';

export default function App() {
  return (<div className="App">
    <Header/>
  </div>);
}

function Header(){
  return  (<header className="App-header">
    <h1>TIC-TAC-TOE</h1>
      <Game/>
    </header>
    );
}
