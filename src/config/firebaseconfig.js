// Import the functions you need from the SDKs you need

import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDLONVkDItq2hIbCyMxase0wmsoCH3lz6Y",
  authDomain: "projetostep-3ace6.firebaseapp.com",
  projectId: "projetostep-3ace6",
  storageBucket: "projetostep-3ace6.appspot.com",
  messagingSenderId: "959913139694",
  appId: "1:959913139694:web:7635f5621ae8a7d54cc2ff"
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig)

//const database = firebase.firestore()
export default firebase