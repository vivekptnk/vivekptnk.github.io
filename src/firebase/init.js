import firebase from 'firebase/app';
import firestore from 'firebase/firestore';

var config = {
  apiKey: "AIzaSyB9YcKJxJ4BUZru3mWMQcg31ChqcRhg638",
  authDomain: "gochat-56c58.firebaseapp.com",
  databaseURL: "https://gochat-56c58.firebaseio.com",
  projectId: "gochat-56c58",
  storageBucket: "gochat-56c58.appspot.com",
  messagingSenderId: "134578247757"
};
const firebaseApp = firebase.initializeApp(config);
firebaseApp.firestore().settings({ timestampsInSnapshots: true });

export default firebaseApp.firestore();