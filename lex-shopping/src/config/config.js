import firebase from "firebase"

import "firebase/storage"

const firebaseConfig = {
    apiKey: "AIzaSyDGXcLRGwogfHculocT0oHo3iy8ORwCHHs",
    authDomain: "lexartshopping-db.firebaseapp.com",
    databaseURL: "https://lexartshopping-db-default-rtdb.firebaseio.com",
    projectId: "lexartshopping-db",
    storageBucket: "lexartshopping-db.appspot.com",
    messagingSenderId: "1095571797140",
    appId: "1:1095571797140:web:07ce15acccda4a86e7b081",
    measurementId: "G-GXRHBN7KK8"
  };

  firebase.initializeApp(firebaseConfig);

  const database = firebase.firestore()

  export default database