import firebase from 'firebase/compat/app';
import { getFirestore } from 'firebase/firestore';

import { getAuth, onAuthStateChanged } from 'firebase/auth'

import * as firebaseui from 'firebaseui'
import 'firebaseui/dist/firebaseui.css'

// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyC1gIB-hu2xnlpkLfe30JkSyJDUuJh8REo",
  authDomain: "ttrpg-a345d.firebaseapp.com",
  projectId: "ttrpg-a345d",
  storageBucket: "ttrpg-a345d.appspot.com",
  messagingSenderId: "452950240098",
  appId: "1:452950240098:web:711c7b17b1db3a6afcda3b",
  measurementId: "G-XKPNVK33QD"
};

// Initialize Firebase
export const app = firebase.initializeApp(firebaseConfig);
//export const auth = getAuth(app)
export const db = getFirestore()

export const ui = new firebaseui.auth.AuthUI(firebase.auth())
export const uiOptions = {
  signInOptions: [
    firebase.auth.EmailAuthProvider.PROVIDER_ID
  ],
  signInSuccessUrl: '/'
}

export var uid

export function isSignedIn (){
  return new Promise((resolve, reject) => {
    const auth = getAuth()
    onAuthStateChanged(auth, (user) => {
      if (user) {
        uid = user.uid
        resolve(user)
      } else {
        reject('No users signed in.')
      }
    })
  })
}
// there is stuff we can't do until the user is signed in
// on authstatechanged, set the store
// login page signs user in, layout checks that user is signed in,
//    if they are not, redirects