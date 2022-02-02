import firebase from 'firebase/compat/app';
import 'firebase/compat/firestore';
import 'firebase/compat/auth';
const config ={
    apiKey: "AIzaSyCxXBhecMBAhTnOcmPJaUzIUUXa7uHpTKs",
    authDomain: "crawn-db-fe6db.firebaseapp.com",
    projectId: "crawn-db-fe6db",
    storageBucket: "crawn-db-fe6db.appspot.com",
    messagingSenderId: "197248732053",
    appId: "1:197248732053:web:8990ab82acfb819be3049c",
    measurementId: "G-C3BPBSWDW6"
  };

  firebase.initializeApp(config);


  export const auth = firebase.auth();

  export const firestore = firebase.firestore();

  const provider = new firebase.auth.GoogleAuthProvider();

  provider.setCustomParameters({prompt : 'select_account'});

  export const signInWithGoogle = ()=> auth.signInWithPopup( provider);

  export default firebase;

  