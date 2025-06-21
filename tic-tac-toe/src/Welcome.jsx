import './welcome.css';
import lotusLogo from './assets/lotus-logo.png';

function Welcome({ onStart }) {
  return (
    <div className="overlay">
      <img src={lotusLogo} alt="Lotus Logo" className="lotus-logo" />
      
      <h1>Tic Tac Toe</h1>
      <p>Ready to test your strategy?</p>
      
      <button className="start-btn" onClick={onStart}>Start Game</button>
      
      <footer className="footer">
        <p><span style={{ fontSize: '22px' }}>💕</span> "All within the DestinationNova"</p>
        <small>Created by <strong>Zeal Patel, Tejas Avatar, and Gaurav Tadia</strong></small>
      </footer>
    </div>
  );
}

export default Welcome;
