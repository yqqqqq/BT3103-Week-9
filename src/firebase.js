import firebase from 'firebase';

const firebaseConfig = {
  apiKey: "AIzaSyA7Vv-JPqPa4xM5lmqOL6lFZbeYEOqaXME",
  authDomain: "chart-tutorial.firebaseapp.com",
  databaseURL: "https://chart-tutorial.firebaseio.com",
  projectId: "chart-tutorial",
  storageBucket: "chart-tutorial.appspot.com",
  messagingSenderId: "22589580868",
  appId: "1:22589580868:web:85ad07e892c58787863e11",
  measurementId: "G-1M1QR248Y8"
};
  
  firebase.initializeApp(firebaseConfig);
  var database = firebase.firestore();
  export default database;