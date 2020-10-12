import firebase from 'firebase/app';
import 'firebase/firestore';

const firebaseConfig = {
    apiKey: "AIzaSyA1lEO-ZhIZgZ1cIhSNs4F7o_JQru8yLls",
    authDomain: "vegaexample-f9e43.firebaseapp.com",
    databaseURL: "https://vegaexample-f9e43.firebaseio.com",
    projectId: "vegaexample-f9e43",
    storageBucket: "vegaexample-f9e43.appspot.com",
    messagingSenderId: "142434804987",
    appId: "1:142434804987:web:bbaa2e305c5df858ea7c5e",
    measurementId: "G-FYKKJ09Q24"
  };

firebase.initializeApp(firebaseConfig);

let db = firebase.firestore();

export default {
    firebase, db
}