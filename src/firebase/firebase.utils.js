import firebase from "firebase/app";
import "firebase/firestore";
import "firebase/auth";

const config = {
  apiKey: "AIzaSyBYtQ_kTQOIQXU91BUKkDZbWHHBABu7aAM",
  authDomain: "potent-well-200809.firebaseapp.com",
  databaseURL: "https://potent-well-200809.firebaseio.com",
  projectId: "potent-well-200809",
  storageBucket: "potent-well-200809.appspot.com",
  messagingSenderId: "950792842920",
  appId: "1:950792842920:web:4fd784a8cb7fcd9cc79c9d"
};

export const createUserProfileDocument = async (userAuth, additionalData) => {
  if (!userAuth) return;

  const userRef = firestore.doc(`users/${userAuth.uid}`);

  const snapShot = await userRef.get();

  if (!snapShot.exists) {
    const { displayName, email } = userAuth;
    const createdAt = new Date();

    try {
      await userRef.set({
        displayName,
        email,
        createdAt,
        ...additionalData
      });
    } catch (error) {
      console.log("Error al crear usuario", error.message);
    }
  }

  return userRef;
};

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: "select_account" });
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;
