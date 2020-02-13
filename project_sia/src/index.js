import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import './index.css';
import App from './App';
import Backend from './Backend';
import * as serviceWorker from './serviceWorker';
import firebase from 'firebase';

const config = {
  apiKey: "AIzaSyD31TUzWEiKezgS8yme4U7ULFzY9uARP4c",
  authDomain: "sia2020-56c6e.firebaseapp.com",
  databaseURL: "https://sia2020-56c6e.firebaseio.com",
  projectId: "sia2020-56c6e",
  storageBucket: "sia2020-56c6e.appspot.com",
  messagingSenderId: "810233923069",
  appId: "1:810233923069:web:148cfe95ca7bbaac818594"
};
firebase.initializeApp(config);

ReactDOM.render(
  <Router>
      <div>
        <Route exact path='/' component={App} />
        <Route path='/backend' component={Backend} />
      </div>
  </Router>,
  document.getElementById('root')
);
// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
