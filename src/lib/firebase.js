import firebase from 'firebase/compat/app';
import { setDoc, doc, getFirestore } from 'firebase/firestore';

import { getAuth, onAuthStateChanged } from 'firebase/auth'

import * as firebaseui from 'firebaseui'
import 'firebaseui/dist/firebaseui.css'
import { goto } from '$app/navigation';

import { firebaseConfig } from './secrets';

// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional


// Initialize Firebase
export const app = firebase.initializeApp(firebaseConfig);
export const db = getFirestore()

export const ui = new firebaseui.auth.AuthUI(firebase.auth())
export const uiOptions = {
  signInOptions: [
    firebase.auth.EmailAuthProvider.PROVIDER_ID
  ],
  //signInSuccessUrl: '/',
  callbacks: {
    signInSuccessWithAuthResult: async (authResult) => {
      const {user} = authResult
      console.log(user)
      await setDoc(doc(db, 'users', user.uid), {
        displayName: user.displayName
      }, {merge: true})
      goto('/')
      return false
    }
  }
}

export function isSignedIn (){
  return new Promise((resolve, reject) => {
    const auth = getAuth()
    onAuthStateChanged(auth, (user) => {
      if (user) {
        resolve(user)
      } else {
        reject('No users signed in.')
      }
    })
  })
}