import firebase from "firebase/app";
import database from "firebase/database";
import "firebase/auth";

const config = {
  apiKey: "AIzaSyCVSWLQ-RxQ8PeEUBv60ZE53dixWNkeym0",
  authDomain: "project-sia-6ae2d.firebaseapp.com",
  databaseURL: "https://project-sia-6ae2d.firebaseio.com",
  projectId: "project-sia-6ae2d",
  storageBucket: "project-sia-6ae2d.appspot.com",
  messagingSenderId: "202019575482",
  appId: "1:202019575482:web:52e5d3ab5f39aace8b1483",
  measurementId: "G-HQG044RFLM"
};

let firebaseCache;

export const getFirebase = () => {
  if (firebaseCache) {
    return firebaseCache;
  }

  firebase.initializeApp(config);
  firebaseCache = firebase;
  return firebase;
};
