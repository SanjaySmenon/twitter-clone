import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';
const firebaseConfig = {
    apiKey: "AIzaSyBu88tpTVJ4gfzLhlz_ohzT302pEe4hpqM",
    authDomain: "twitterclone-8e468.firebaseapp.com",
    projectId: "twitterclone-8e468",
    storageBucket: "twitterclone-8e468.appspot.com",
    messagingSenderId: "130909636569",
    appId: "1:130909636569:web:95640ec5296d6ee9f23bc8",
    measurementId: "G-1PMDSCP0J3"
  };

  const firebaseApp=firebase.initializeApp(firebaseConfig);
  const db=firebaseApp.firestore();

  export default db;