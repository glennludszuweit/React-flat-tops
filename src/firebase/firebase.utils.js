import firebase from "firebase/app";
import "firebase/firestore";
import "firebase/auth";

const config = {
  apiKey: "AIzaSyCKjrJyBUTUMU9FMqE72vEdBAxb8lNzfIo",
  authDomain: "flat-tops.firebaseapp.com",
  databaseURL: "https://flat-tops.firebaseio.com",
  projectId: "flat-tops",
  storageBucket: "flat-tops.appspot.com",
  messagingSenderId: "915669359460",
  appId: "1:915669359460:web:bb974e131bb1b71ce8f871",
  measurementId: "G-3WVYPGY9V4",
};

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ promt: "select_account" });
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;
