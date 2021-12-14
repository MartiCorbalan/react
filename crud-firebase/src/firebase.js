import firebase from 'firebase/app'
import 'firebase/firestore'

const firebaseConfig = {
    apiKey: "AIzaSyCYMZrCdXxegIHRZMxo3859yY9lFJ1FYfM",
    authDomain: "crud-react-fb267.firebaseapp.com",
    projectId: "crud-react-fb267",
    storageBucket: "crud-react-fb267.appspot.com",
    messagingSenderId: "1084519646953",
    appId: "1:1084519646953:web:f89f37e359440411679278"
  };

// Initialize Firebase
firebase.initializeApp(firebaseConfig);

export {firebase}