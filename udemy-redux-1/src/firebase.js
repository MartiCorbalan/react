import firebase from 'firebase/app';
import 'firebase/auth'
import 'firebase/firestore'
import 'firebase/storage'

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

const auth = firebase.auth()
const db = firebase.firestore()
const storage = firebase.storage()

export {auth, firebase, db, storage}