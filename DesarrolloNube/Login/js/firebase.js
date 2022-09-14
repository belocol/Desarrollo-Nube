/* import { initializeApp } from "firebase/app"; */
import { initializeApp } from "https://www.gstatic.com/firebasejs/9.9.4/firebase-app.js";
import { getAuth } from "firebase/auth";

// TODO: Replace the following with your app's Firebase project configuration
// See: https://firebase.google.com/docs/web/learn-more#config-object
const firebaseConfig = {
  apiKey: "AIzaSyDtFTZpQbwoJEUHTNEDct_ZxSRd5xr9H9Q",
  authDomain: "prueba-e8ef2.firebaseapp.com",
  projectId: "prueba-e8ef2",
  storageBucket: "prueba-e8ef2.appspot.com",
  messagingSenderId: "971030495927",
  appId: "1:971030495927:web:fc09c9be79f94128398332",
  measurementId: "G-MDTKHTB5J9"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);



// Initialize Firebase Authentication and get a reference to the service
const auth = getAuth(app);




export const loginvalidation=(email,password)=>
  signInWithEmailAndPassword(auth, email, password)