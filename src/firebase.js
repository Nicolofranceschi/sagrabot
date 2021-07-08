import firebase from "firebase/app";
import "firebase/auth";
import "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyAygild3Ju3r3jHL9f-KfEVAHvQFBhowxc",
  authDomain: "sagrabot.firebaseapp.com",
  projectId: "sagrabot",
  storageBucket: "sagrabot.appspot.com",
  messagingSenderId: "583569284042",
  appId: "1:583569284042:web:a39954381f226446bc8d33",
  measurementId: "G-Z6L7W1LECB"
};

firebase.initializeApp(firebaseConfig);


export const initRecaptcha = (buttonId) => {
  window.recaptchaVerifier = new firebase.auth.RecaptchaVerifier(buttonId, {
    'size': 'invisible',
    'callback': (response) => {
      onSignInSubmit();
    }
  });
}

export const signInWithPhoneNumber = async (numero) => {
  try {
    if (!window.recaptchaVerifier) return;
    const confirmationResult = await firebase.auth().signInWithPhoneNumber(numero, window.recaptchaVerifier);
      
    console.log({ confirmationResult });
    window.confirmationResult = confirmationResult;
  } catch (error) {
    console.log({ error });
  }
}

export const sendVerificationCode = async (code) => {
  console.log('verification',code)
  try {
    const { user } = await confirmationResult.confirm(code);
    var credential = firebase.auth.PhoneAuthProvider.credential(confirmationResult.verificationId, code);
    console.log(user,credential);
    firebase.auth().signInWithCredential(credential);
  } catch (error) {
    console.log({error})
  }
}

export const generateUserDocument = async (user, additionalData) => {
  if (!user) return;
  const userRef = firestore.doc(`users/${user.uid}`);
  const snapshot = await userRef.get();
  if (!snapshot.exists) {
    const { email, displayName } = user;
    try {
      await userRef.set({
        displayName,
        email,
        ...additionalData
      });
    } catch (error) {
      console.error("Error creating user document", error);
    }
  }
  return getUserDocument(user.uid);
};

export const getUserDocument = async uid => {
  if (!uid) return null;
  try {
    const userDocument = await firestore.doc(`users/${uid}`).get();
    return {
      uid,
      ...userDocument.data()
    };
  } catch (error) {
    console.error("Error fetching user", error);
  }
};
export const auth = firebase.auth()
export const firestore = firebase.firestore();