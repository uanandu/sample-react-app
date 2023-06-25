import './App.css';
import { useState } from 'react';

function App() {

  // Create a joke state
  const [joke, setJoke] = useState('');

  // Create a function to fetch a joke from the API
  const generateJoke = () => {
    fetch('https://icanhazdadjoke.com/', {
      headers: {
        'Accept': 'application/json'
      }
    }).then(response => response.json())
      .then(data => setJoke(data.joke))
  }

  return (
    <div className="App">
      <header className="App-header">
        <div className='Joke-div'>
        <h1>Joke generator app</h1>
        <p>Click the button to generate a joke</p>
        <button className='Generate-button' onClick={generateJoke} >Generate Joke</button>
        <h2>Here is your joke</h2>
        <div>
          {joke}
        </div>
      </div>
      </header>
      
    </div>
  );
}

export default App;
