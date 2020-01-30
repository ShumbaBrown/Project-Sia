import React from 'react';
import logo from './logo.svg';
import './App.css';
import notification from './notification';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
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
        </a>
      </header>
    </div>

    // <!-- The core Firebase JS SDK is always required and must be listed first -->
    // <script src="/__/firebase/7.5.0/firebase-app.js"></script>
    //
    // <!-- TODO: Add SDKs for Firebase products that you want to use
    //      https://firebase.google.com/docs/web/setup#available-libraries -->
    // <script src="/__/firebase/7.5.0/firebase-analytics.js"></script>
    //
    // <!-- Initialize Firebase -->
    // <script src="/__/firebase/init.js"></script>
  );
}

export default App;
