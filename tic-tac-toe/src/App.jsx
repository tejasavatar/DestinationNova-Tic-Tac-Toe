import { useState } from 'react';
import Welcome from './Welcome';
import Game from './Game';
import './App.css';

function App() {
  const [started, setStarted] = useState(false);

  return (
    <div className="app-container">
      {started ? <Game onBack={() => setStarted(false)} /> : <Welcome onStart={() => setStarted(true)} />}
    </div>
  );
}

export default App;