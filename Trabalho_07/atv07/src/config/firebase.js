import * as firebase from 'firebase';
import 'firebase/firebase-storage';

var firebaseConfig = {
    apiKey: "AIzaSyAsXAd9HyXiCAnrcX7JmSNtd9wksaf8KnA",
    authDomain: "crud-trabalho07-pidm.firebaseapp.com",
    projectId: "crud-trabalho07-pidm",
    storageBucket: "crud-trabalho07-pidm.appspot.com",
    messagingSenderId: "83065990978",
    appId: "1:83065990978:web:33662f3c95b137fd2522db"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);

  export const database = firebase.firestore();