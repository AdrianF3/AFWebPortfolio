import firebase from 'firebase/compat/app'
import 'firebase/compat/firestore'
import 'firebase/compat/auth'
import 'firebase/compat/storage'




// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyC9bMRFRrSqClbEgEDDneSPx0eD1qZjB8E",
    authDomain: "afportfolio-20234.firebaseapp.com",
    projectId: "afportfolio-20234",
    storageBucket: "afportfolio-20234.appspot.com",
    messagingSenderId: "694996673940",
    appId: "1:694996673940:web:1035b9d28eb89bc0a55b81",
    measurementId: "G-D9S1539Y82"
  };

//init firebase
firebase.initializeApp(firebaseConfig)

//init services
// const analytics = getAnalytics(firebase);
const projectFirestore = firebase.firestore()
const projectAuth = firebase.auth()
const projectStorage = firebase.storage()

//timestamp
const timestamp = firebase.firestore.Timestamp

export { projectFirestore, projectAuth, projectStorage, timestamp }

