import firebase from "firebase/compat/app";
import "firebase/compat/firestore";
import "firebase/compat/auth";
const config = {
  apiKey: "AIzaSyCxXBhecMBAhTnOcmPJaUzIUUXa7uHpTKs",
  authDomain: "crawn-db-fe6db.firebaseapp.com",
  projectId: "crawn-db-fe6db",
  storageBucket: "crawn-db-fe6db.appspot.com",
  messagingSenderId: "197248732053",
  appId: "1:197248732053:web:8990ab82acfb819be3049c",
  measurementId: "G-C3BPBSWDW6",
};

firebase.initializeApp(config);

export const auth = firebase.auth();

export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();

provider.setCustomParameters({ prompt: "select_account" });

export const signInWithGoogle = () => auth.signInWithPopup(provider);

export const createUserProfileDocument = async (userAuth, additionalData) => {
  console.log(userAuth);
  if (!userAuth) {
    return ;
  }

  
  const userRef = firestore.doc(`users/${userAuth.uid}`);
   console.log(userRef);

  const snapShot = await userRef.get();
  console.log(snapShot);

  if (!snapShot.exists) {
    const { displayName, email } = userAuth;
    const timing = new Date();
    try {
      console.log(additionalData);
      userRef.set({
    displayName,
    email,
    timing,
    ...additionalData
  
      
      });
    } catch (err) {
      console.log("error in creating user" + err.message);
    }
  }

  return userRef;
};

export default firebase;
