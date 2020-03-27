import React from 'react';
import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
         Aplicação tem como intuito rastrear o numero real de casos de coronga virus no Brasil,
         Em desenvolvimento pelo nego.
         
         developer #dragolucas
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Casos de coronga: 1745. rastrear no mapa
        </a>
      </header>
    </div>
  );
}

export default App;
