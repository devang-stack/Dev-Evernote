import React from 'react';
import firebase from "firebase";
import '@firebase/firestore'
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';


require('firebase/firestore');


  var firebaseConfig = {
    apiKey: "AIzaSyD9-30A844fIGA8PyssvKq80A-wYq070Mw",
    authDomain: "evernote-clone-9d4b3.firebaseapp.com",
    projectId: "evernote-clone-9d4b3",
    storageBucket: "evernote-clone-9d4b3.appspot.com",
    messagingSenderId: "10913498055",
    appId: "1:10913498055:web:bc73013b9f8f33b13ccfe2",
    measurementId: "G-81TE8ZP4GX"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);
  firebase.analytics();

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('evernote-container')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals

serviceWorker.unregister();