// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDd4j_Ypq6kPqz9wyxPw_uVX9UlFxqh8To",
  authDomain: "reactjs-51a1f.firebaseapp.com",
  projectId: "reactjs-51a1f",
  storageBucket: "reactjs-51a1f.appspot.com",
  messagingSenderId: "444400444659",
  appId: "1:444400444659:web:a55b4cc463364dd17f4386",
  measurementId: "G-XSKQ5SP4P6"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);