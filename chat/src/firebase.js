import firebase from 'firebase/app'
import 'firebase/firestore'
import 'firebase/auth'

const firebaseConfig = {
    apiKey: "AIzaSyChPirIcTWBNK8TCM14e0gzRyBzCzh9pOo",
    authDomain: "chat-f3561.firebaseapp.com",
    projectId: "chat-f3561",
    storageBucket: "chat-f3561.appspot.com",
    messagingSenderId: "541923008973",
    appId: "1:541923008973:web:1fa1a44c0eb8bbd513e484"
};

firebase.initializeApp(firebaseConfig);

const db = firebase.firestore()
const auth = firebase.auth()
const provider = new firebase.auth.GoogleAuthProvider()

export {db, auth, provider}