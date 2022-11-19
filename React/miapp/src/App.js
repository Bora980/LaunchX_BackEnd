import logo from './logo.svg';
import './App.css';
import ReactDOM from 'react-dom/client';
import React from 'react';

function App() {
  const root = ReactDOM.createRoot(document.getElementById('root'));
  let localtime = new Date();
  // let qatar = new Date(localtime.getTime() + (localtime.getTimezoneOffset() * (6000)));
  // let horaqatar = new Date(qatar + (3600000*9));
  let utc = new Date(localtime.getTime() + (3600000*9));
  
  const titulo = React.createElement(
    'h1',
    {},'La hora es:'
  );

  const horaMexico = React.createElement(
    'h2',
    {},
    'En México: ' + localtime.toLocaleTimeString('en-US')
  );
  
  const horaQatar = React.createElement(
    'h2',
    {},
    'En Qatar: ' + utc.toLocaleTimeString('en-US')
  );

  const headerApp = React.createElement(
    'div',
    {className: 'App-header'},
    titulo, horaMexico, horaQatar
  );

  const divApp = React.createElement(
    'div',
    {className : 'App'},
    headerApp
  );

  const element = (
    <div className="App">
      <header className="App-header">
        {/* <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a> */}
        <h1> La hora es:</h1>
        {/* <h2> En México {new Date().toLocaleTimeString('es-MX')}</h2> */}
        <h2> En Qatar {utc.toLocaleTimeString('en-US')}</h2>
        <h2> En Estados Unidos {new Date().toLocaleTimeString('en-US')}</h2>
        {horaMexico}

      </header>
    </div>
  );
  root.render(element);
}

export default App;
