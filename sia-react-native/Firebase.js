import * as firebase from 'firebase';
import 'firebase/firestore'

const config = {
  apiKey: "AIzaSyD31TUzWEiKezgS8yme4U7ULFzY9uARP4c",
  authDomain: "sia2020-56c6e.firebaseapp.com",
  databaseURL: "https://sia2020-56c6e.firebaseio.com",
  projectId: "sia2020-56c6e",
  storageBucket: "sia2020-56c6e.appspot.com",
  messagingSenderId: "810233923069",
  appId: "1:810233923069:web:148cfe95ca7bbaac818594"
};

// Initialize Firebase
let Firebase = firebase.initializeApp(config)

export const db = firebase.firestore()

export default Firebase
